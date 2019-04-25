import Col from "../db/schema/col";

function ColsCtr(req, res, next) {
    const data = req.body
    let col = new Col({
        type: data.type || 0,
        serviceCode: data.serviceCode,
        domainName: data.domainName,
        data : data.data || null,
        token : data.token,
        date : new Date()
    });
    col.save((err, data) => {
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
