<script type="text/javascript">
	export default {
		data(){
			return {
				data:[
					{
						pointCode: "SD038F2L",
						position: { x:100, y:100, z: 100 }
					}
				],
			    pickcollectgroup: [],             //需要收藏的测点
				test:''
			}
		},
		methods:{
			getPointInfo(object){
				console.log('a');
				console.log(object);
				console.log(this.pickcollectgroup);
			}
		}
	}
</script>

### canvas stl-model

:::demo 
```html 
<gl-stl-model src="https://threejs.org/examples/models/stl/ascii/slotted_disk.stl" 
:objs="data"
></gl-stl-model>

<script>
export default {
    data(){
    	return {
    		zyz:'',
    		lv:true,
    	}
	}
}
</script>

```
:::


### radio Attributes

| 参数   | 说明          | 类型   | 可选值 | 默认值 |
| ------ | ------------- | ------ | ------ | ------ |
| src    | stl模型路径   | string |
| objs   | 绘制小球的位置  | array|
| objsScale   | 绘制小球的放大倍数，默认是半径16  | number| | 1
| objsColor   | 绘制小球的颜色 | number| | 0x00ff00
| scene-background   | 画布的背景色  | number  |

- stl模型的宽高根据外层div 100%自适应

| 事件   | 说明          |  参数 | 
| ------ | ------------- |-----------|
| on-getobject    | 鼠标左键点击，如果选中，即返回上述objs的Mesh模型  |
| on-load   | stl模型加载完毕,每次更改model的src路径，加载完毕即会触发   | - |

