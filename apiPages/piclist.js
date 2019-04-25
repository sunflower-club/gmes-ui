var fs1 = require('fs');
import mineType from 'mime-types';
function piclistCtr(req, res, next) {
	var arr = [];
	fs1.readdir('uploads',function(err,file){
		file.forEach((item)=>{
			fs1.stat('uploads' + '/' + item, function(err, stat){
				var path ='uploads' + '/' + item;	
				let data = fs1.readFileSync(path); 		
				let base64 = 'data:' + mineType.lookup(path) + ';base64,' + data; 
				arr.push({img:base64}) 
			});
		})
		res.render('imglist',{imgList:arr})
		
	})
   
}

export default piclistCtr