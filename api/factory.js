import Factory from "../db/schema/factoryaddress";
function factoryCtr(req, res, next) {
    const data = req.body
    let factory = new Factory({
        name : data.name,
        siteCode : data.siteCode,
        env : data.env,
        api:data.api,
        mq:data.mq,
        mqUser:data.mqUser,
        mqPwd:data.mqPwd,
        mtUrl:data.mtUrl,
        padUrl:data.padUrl,
        manageUrl:data.manageUrl,
        date : new Date(),
    });
    Factory.remove({'siteCode':data.siteCode,'env':data.env},(data)=>{
        console.log(data)
    });

    factory.save((err, data) => {
        if (err) {
            console.log("Error:" + err);
            res.json({"success":false})
        }
        else {
            res.json({"success":true})
        }
    });
}

export default factoryCtr 