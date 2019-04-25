function chatCtr(req, res, next) {
    //res.render('chat')
    res.render('chat',{content:'<img src="#" onerror= "alert(1)"/>'})
}

export default chatCtr