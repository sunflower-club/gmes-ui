import Course from "../db/schema/course";
function courseCtr(req, res, next) {
    const data = req.body
    var conditions = {id: data.id};  
	var updates = {$set: data};
	Course.update(conditions, updates, function (error) {  
	    if (error) {  
	        console.log("Error:" + err);
            res.json({"success":false})
	    } else {  
	        res.json({"success":true}) 
	    }  
	});  
}
export default courseCtr