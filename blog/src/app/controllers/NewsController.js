// Path ở file news.js tức app.get('/news'
// function handler ở file NewsController (req,res) => {res.send}

//khai báo class thì viết theo CamelCase
class NewsController {
    //[GET] /news
    index(req,res) {
        res.render('news',{title: "post soccer"});
    }
    // [GET] /news/:slug
    show(req,res) {
        res.send("NEWS DETAIL!");
    }
}

module.exports = new NewsController;