import Factory from "../db/schema/factoryaddress";
function getByConditions(req, res, next){
    var query = Factory.find({});
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

function getColCtr(req, res, next) {
    getByConditions(req, res, next)
}

export default getColCtr