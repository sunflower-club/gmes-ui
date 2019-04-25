var path = require('path')
var fs = require('fs');
var config = require('../package.json')

config = Object.assign({}, config, {
	scripts: {
    "install_packages": "npm install --registry=https://registry.npm.taobao.org",
	"start": "node server.js",
    "test": "cross-env NODE_TEST=true npm start"
	},
	"devDependencies": {}
})

delete config.devDependencies

var  file = fs.openSync(path.resolve(__dirname, '../dist/package.json'), 'w')
fs.writeFileSync(path.resolve(__dirname, '../dist/package.json'), JSON.stringify(config))
