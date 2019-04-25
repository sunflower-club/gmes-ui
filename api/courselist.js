import Course from "../db/schema/course";

function CourseListCtr(req, res, next) {
    let query = Course.find({});
    query.sort({'planDate':-1});
    query.exec(function(err, data){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            const nowTime = new Date().getTime();
            const ndata = []
            data.forEach((item,i)=>{
                const time = (new Date(item.planDate).getTime() - nowTime)/1000/3600;
                let status = 0
                if(time < 0){

                }else if(time < 48){
                    status = 1
                }else if(!isNaN(time)){
                    status = 2
                }else{
                    status = 3
                }
                
                item["_doc"]['status'] = status;
                ndata.push(item)

            })
            res.json({success:true,content:ndata})
        }
    })
}
export default CourseListCtr