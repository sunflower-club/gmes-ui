import Api from "../db/schema/api";
import getTime from "../core/getTime"

function getByConditions(req, res, next){
    const data = req.query;
    const token = req.headers.token;
    const pageNum = (data.pageNum-1)*10
    var query = Api.find({"token":token});
    query.limit(10);
    query.skip(pageNum);
    query.sort({'_id':-1});
    query.exec(function(err, data){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            if(pageNum){
                let newData = change(data);
                res.json({success:true,content:{data:newData}})
            }else{
                count(req, res, data,token)
            }
            
        }
    })
}

function count(req, res, data,token){
    const query = Api.find({"token":token}).count();
    query.exec(function(err, datas){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            let newData = change(data);
            let _data = {data:newData,count:datas};
            res.json({success:true,content:_data});
        }
    })  
}


function change(data){
    return  data.map((item)=>{
                let m = {};
                m.date = getTime.three(item.date)
                m.data = item.data;
                m.des = item.des;
                m.id = item.id;
                return m
            });
}

function getApiCtr(req, res, next) {
    getByConditions(req, res, next)
}



export default getApiCtr