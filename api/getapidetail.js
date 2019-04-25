import Api from "../db/schema/api";
import getTime from "../core/getTime"

function getByConditions(req, res, next){
    const data = req.query;
    const id = data.id;
    var query = Api.find({"id":id});
    query.exec(function(err, data){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            res.json({success:true,content:{data:data[0].data}})
        }
    })
}


function getApiCtr(req, res, next) {
    getByConditions(req, res, next)
}



export default getApiCtr