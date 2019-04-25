import Api from "../db/schema/api";

function apiCtr(req, res, next) {
    console.log(req.body)
    const data = req.body
    const token = req.headers.token
    let api = new Api({
        token:token,
        id : data.id,
        data : data.data,
        des:data.des,
        date : new Date()
    });
    var query = Api.find({"id":data.id}).count();
    query.exec(function(err, data){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            if(data){
                res.json({"success":false,msg:'id号重复,此接口已存在'})
            }else{
                saveApi()
            }
            
        }
    })
    function saveApi(){    
        api.save((err, data) => {
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
export default apiCtr