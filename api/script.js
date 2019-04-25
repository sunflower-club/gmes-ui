import Script from "../db/schema/script";

function ColsCtr(req, res, next) {
    const data = req.body;
    console.log(data)
    let script = new Script({
        str:data.str,
        date : new Date()
    });
    script.save((err, data) => {
        if (err) {
            console.log("Error:" + err);
            res.json({"success":false})
        }
        else {
            res.json({"success":true})
        }
    });
}
export default ColsCtr
