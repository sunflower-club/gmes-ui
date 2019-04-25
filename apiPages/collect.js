import Collect from "../db/schema/collect";

function getCollect(req, res, next){
    var query = Collect.find({});
/*    query.limit(10);
    query.skip(25);*/
    query.sort({'_id':-1});
    query.exec(function(err, data){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            res.render('collect',{colList:data})
        }
    })
}

function getCollectCtr(req, res, next) {
    getCollect(req, res, next)
}

export default getCollectCtr