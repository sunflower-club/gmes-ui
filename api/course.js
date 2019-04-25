import Course from "../db/schema/course";
import randoms from "../core/random"
function courseCtr(req, res, next) {
    const data = req.body
    let course = new Course({
        person : data.person,
        course : data.course,
        planDate : data.planDate,
        time : data.time,
        date : new Date(),
        id:randoms(5)
    });
    course.save((err, data) => {
        if (err) {
            console.log("Error:" + err);
            res.json({"success":false})
        }
        else {
            res.json({"success":true})
        }
    });
}

export default courseCtr
