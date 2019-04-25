import Factory from "../db/schema/factoryaddress";
function factoryCtr(req, res, next) {
    const data = req.body
    Factory.remove({'siteCode':data.siteCode,'env':data.env},(err, data)=>{
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