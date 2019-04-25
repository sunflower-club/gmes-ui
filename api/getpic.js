import fs from 'fs';  
import path from 'path';  
import mineType from 'mime-types';
function picCtr(req, res, next) {
	let { files } = req;
	let name = '';
	files.forEach((file)=>{
		let { path ,
			  filename 
		 	} = file;
		name = filename;
		let data = fs.readFileSync(path);
		data = new Buffer(data)
		fs.writeFile('./public/images/'+filename+'.jpg', data,'binary',function(err) {
	        if(err) {console.log(err)}
	    });  
	})

	//let base64 = 'data:' + mineType.lookup(files[0].path) + ';base64,' + data;  
  	res.json({"success":true,"content":`<img src="../images/${name}.jpg">`})

}
export default picCtr