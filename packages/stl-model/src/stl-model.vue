<template>
    <div style="width: 100%; height: 100%; margin: 0; border: 0; padding: 0;">
        <canvas id ="canvas" v-if="suportWebGL" ref="canvas" style="width: 100%; height: 100%;"></canvas>
        <div v-else>
            <slot>
                Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>'
            </slot>
        </div>
    </div>
</template>

<script>
import {
  Object3D,
  Vector2,
  Vector3,
  Color,
  Scene,
  Raycaster,
  WebGLRenderer,
  PerspectiveCamera,
  DirectionalLight,
  Mesh,
  MeshPhongMaterial,
  SphereGeometry,
  MeshBasicMaterial,
} from "three";
import { getSize, getCenter } from "./js/util";
import { OrbitControls } from "./js/OrbitControls";
import { STLLoader } from "./js/STLLoader";
import { TWEEN } from "./js/tween.min.js";

const suportWebGL = (() => {
  try {
    var canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
})();

export default {
  name: "StlModel",
  props: {
    src: {
      type: String,
      defualt: ""
    },
    objs: {
      type: Array,
      default: function() {
        return [];
      }
    },
    objsColor:{
      type:Number,
      defualt:0x00ff00
    },
    objsScale:{
       type:Number,
       default:1
    },
    sceneBackground:{
      type:Number,
      default:0xffffff
    }
  },
  data() {
    return {
      loader: new STLLoader(),
      suportWebGL,
      canvasPosition:{},
      size: {},
      object: null,
      pointCodesObjects: [],         //保存加载进入的objs的mesh模型
      raycaster: new Raycaster(),
      wrapperNegate: {},
      mouse: new Vector2(),
      camera: new PerspectiveCamera(45, 1, 0.01, 100000),
      scene: new Scene(),
      wrapper: new Object3D(),
      vector:new Vector3(),
      renderer: null,
      controls: null
    };
  },
  mounted() {
    //获取容器的宽高和外部包裹的div大小一致
    this.size = {
      width: this.$el.offsetWidth,
      height: this.$el.offsetHeight
    };
    this.renderer = new WebGLRenderer({
      antialias: true,
      alpha: true,
      canvas: this.$refs.canvas,
      preserveDrawingBuffer:true
    });
    this.renderer.shadowMap.enabled = false;

    this.scene.add(this.wrapper);

    this.scene.background = new Color( this.sceneBackground );
    if(this.src){
      this.load(); //加载模型和测点
      this.update();
    }
    //添加光源
    this.addLight(1, 1000, 1, 0xcccccc, 1);
    this.addLight(1, -1000, -1, 0xcccccc, 1);

    this.addListener();
    this.animate();
  },
  watch: {
    src:function(newVal,old) {
      this.load();
      this.update();
    }
  },
  methods: {
    onResize() {
      this.$nextTick(() => {
        this.size = {
          width: this.$el.offsetWidth,
          height: this.$el.offsetHeight
        };
      });
    },
    onMouseDown(event) {
      event.preventDefault();

      const intersected = this.pick2D(event.clientX, event.clientY);
      
      if (!intersected) return;
      
      this.$emit("on-getobject",intersected.object);
    },
      
    //在2维坐标点对应的测点位置
    pick2D(x, y) {
      if (this.pointCodesObjects.length == 0) return;
      const rect = this.$el.getBoundingClientRect();

      x -= rect.left;
      y -= rect.top;

      this.mouse.x = x / this.size.width * 2 - 1;
      this.mouse.y = -(y / this.size.height) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);

      const intersects = this.raycaster.intersectObjects(
        this.pointCodesObjects
      ); //只有一个物体就是intersectObject，数组用intersectObjects
      return (intersects && intersects.length) > 0 ? intersects[0] : null;
    },
    update() {
      this.updateRenderer();
      this.updateCamera();
      this.updateControls();
    },
    updateRenderer() {
      const renderer = this.renderer;

      renderer.setSize(this.size.width, this.size.height);
      renderer.setPixelRatio(window.devicePixelRatio || 1);
      renderer.setClearColor(new Color(0xffffff).getHex());
    },
    updateCamera() {
      const camera = this.camera;
      const object = this.object;

      camera.aspect = this.size.width / this.size.height;
      camera.updateProjectionMatrix();

      if (!object) return;

      const distance = getSize(object).length();

      camera.position.set(0, 0, 0);
      camera.position.z = distance;
      camera.lookAt(new Vector3());
    },

    addLight(x, y, z, color, intensity) {
      var directionalLight = new DirectionalLight(color, intensity);
      directionalLight.position.set(x, y, z);
      this.scene.add(directionalLight);
      directionalLight.castShadow = false;
    },

    updateControls() {
      this.controls = new OrbitControls(this.camera, this.$el);
      this.controls.type = "orbit";
    },

    load() {
      if (!this.src) return;
      if (this.object) {
        //移除之前的数据
        this.wrapper.remove(this.object);
        this.scene.remove(...this.pointCodesObjects);
        // return;
      }
      this.loader.load(this.src, arg => {
          const object = new Mesh(arg, new MeshPhongMaterial());
          this.addObject(object);
          this.$emit("on-load");   
          //根据位置信息数据加载测点的位置
          this.addAllObjectsByPosition();
        }
      );
    },
        //添加模型
    addObject(object) {
      this.wrapperNegate = getCenter(object).negate();
      this.wrapper.position.copy(this.wrapperNegate);
      this.object = object;
      this.wrapper.add(object);
      this.updateCamera();
    },

    // 加载测点的位置
    addAllObjectsByPosition() {
      if (this.objs.length == 0) return;
      let objsCopy = this.copyDeep(this.objs);      //深拷贝数组，防止修改到父组件的数据
      this.objs.forEach((item,i) => {
        let { x, y, z } = item.position;
        item.position = {
          x: x + this.wrapperNegate.x,
          y: y + this.wrapperNegate.y, //模拟+1600  待删除
          z: z + this.wrapperNegate.z
        };
        this.addSingleObjectByPosition(item.pointCode, item.position,i,this.objsColor);
      });
    },
   //js的深拷贝
    copyDeep(arr){
      let res=[];
      for(let i=0;i<arr.length;i++){
          let {...arr1}=arr[i];
          res.push(arr1);
      }
      return res
    },
    addSingleObjectByPosition(pointCode, pose, i ,color = 0x00ff00) {
      var geom = new SphereGeometry(this.objsScale*16, this.objsScale*16, this.objsScale*16);
      var materialSphere = new MeshBasicMaterial({
        color: color,
        transparent: true
      });
      var sphere = new Mesh(geom, materialSphere);
      //初始位置随机，增加动画
      sphere.position.x = Math.pow(-1,i)*Math.random() * 3000 ;
			sphere.position.y = Math.pow(-1,i)*Math.random() * 3000 ;
			sphere.position.z = Math.pow(-1,i)*Math.random() * 3000 ;        
      sphere.info = pointCode;
      sphere.ps = pose;
      this.scene.add(sphere);
      this.pointCodesObjects.push(sphere);
      let duration = 100;
      new TWEEN.Tween(sphere.position).to( pose, Math.random() * duration + duration ).easing( TWEEN.Easing.Elastic.Out).start();	
    },

    addListener() {
      this.$el.addEventListener("mousedown", this.onMouseDown, false); //点击获得点的信息
      window.addEventListener("resize", this.onResize, false);         //监听浏览器的视口变化
    },

    animate() {
      requestAnimationFrame(this.animate);
      this.render();
      TWEEN.update();
    },

    render() {
      this.renderer.render(this.scene, this.camera);
    }
  }
};
</script>
