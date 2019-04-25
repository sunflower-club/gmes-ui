### 启动
npm start

### 打包
1. npm run build
2. cd dist
3. npm run install_packages

### mongodb 启动
mongod --dbpath=/frontend/data/db/ --logpath=/frontend/logs/mongodb.log -logappend  --auth --fork --port 27017

> --auth 表示权限认证启动。不需要的可以去除
