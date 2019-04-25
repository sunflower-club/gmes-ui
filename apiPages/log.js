import Col from "../db/schema/col";

function getByConditions(req, res, next){
    var query = Col.find({});
/*    query.limit(10);
    query.skip(25);*/
    query.sort({'_id':-1});
    query.exec(function(err, data){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            res.render('log',{colList:data})
        }
    })
}

function ColCtr(req, res, next) {
    getByConditions(req, res, next)
}

export default ColCtr

