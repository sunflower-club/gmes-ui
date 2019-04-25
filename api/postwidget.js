import Widget from "../db/schema/widget";

function widgetCtr(req, res, next) {
    const data = req.body
    let widget = new Widget({
        name : data.name,
        id 	 : data.id,
        data : data.data,
        date : new Date()
    });

    let query = Widget.find({"id":data.id}).count();
    query.exec(function(err, data){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            if(data){
                res.json({"success":false,msg:'id号重复,此页面已存在'})
            }else{
                saveWidget()
            }
        }
    })
    function saveWidget(){    
        widget.save((err, data) => {
	        if (err) {
	            console.log("Error:" + err);
	            res.json({"success":false})
	        }
	        else {
	            res.json({"success":true})
	        }
	    });
    }
}
export default widgetCtr