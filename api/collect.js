import Collect from "../db/schema/collect"

function collectCtr(req, res, next) {
    const data = req.body
    console.log(data.type)
    let collect = new Collect({
        course:'',
        person:'',
        planDate : '',
        time : '',
        date : new Date()

    });
    collect.save((err, data) => {
        if (err) {
            console.log("Error:" + err);
            res.json({"success":false})
        }
        else {
            res.json({"success":true})
        }
    });
}
export default collectCtr