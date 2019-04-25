import Servicecode from "../db/schema/servicecode";

function ServicecodeCtr(req, res, next) {
    const { code } = req.query
    let query = Servicecode.find({CODE:{$regex : code}});
    query.sort({'_id':-1});
    query.exec(function(err, data){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            res.json({success:true,content:data})
        }
    })
}
export default ServicecodeCtr
