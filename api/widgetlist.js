import Widget from "../db/schema/widget";

function getWidgetCtr(req, res, next){
    const data = req.query;
    const token = req.headers.token;

    let query;
    if(data.id){

        query = Widget.find({id:data.id});
    }else{
        query = Widget.find({});
    }
   
    query.limit();
    query.skip();
    query.sort({'_id':-1});
    query.exec(function(err, data){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            res.json({success:true,content:{data:data}})
        }
    })
}


export default getWidgetCtr