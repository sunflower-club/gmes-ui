
# 项目结构以及开发规范

----

## 项目结构

```json
build ----             打包配置
config ----            打包环境配置
examples ----          例子目录
- assets ----          静态资源
- components ----      页面
- docs ----            md文档
- router ----          路由
App.vue ----           根组件
favicon.ico
main.js ----           根js
nav.config.json ----   路由结构配置文件
packages ----          组件集合
src 
- theme-defualt ----   样式
  - src ----           组件样式文件
static ----            跟git有关
test ---- night-watch  端对端自动化测试.
```

## 开发说明

首先我们要启动主服务。根目录下

```json
npm start
```

然后启动css监听服务。src/theme-defualt下
```json
npm run dev
```
> 开始开发

- 组件源码都放在packages文件夹下，一个组件一个文件夹，构建方式可以参考radio组件，组件的样式统一放在src下的theme-default，要求也是一个组件一个css，项目支持sass。
- 组件完成后需要注册组件，在src目录下的index.js文件中注册组件。
- 组件调试可以在examples/components/HelloWorld.vue中调试，调试地址hello。组件完成后需要写相应的md文档。md文档都放在docs下，nav.config.json。中是配置文档的地址以及出现位置。
