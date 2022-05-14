const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // app.get('/news',(req,res) => {
    //     // check value q trong req
    //     // console.log(req.query.q);
    //     res.render('news', {title: "post soccer"});
    // })
    app.use('/news', newsRouter);

    // app.get('/search',(req,res) => {
    //     res.render('search', {title: "search page"});
    // })

    // app.get('/',(req,res) => {
    //     res.render('home', {title: "Nguyen Xuan Huy"});
    // })
    app.use('/', siteRouter);
    //đưa path "/" về dưới cùng vì xử lí đồng bộ
}
module.exports = route;
