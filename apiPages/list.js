import User from "../db/schema/user";

function getByConditions(req, res, next){
    var query = User.find({});
/*    query.limit(10);
    query.skip(25);*/
    query.exec(function(err, data){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            res.render('index',{userList:data})
        }
    })
}

function indexCtr(req, res, next) {
    getByConditions(req, res, next)
}

export default indexCtr
