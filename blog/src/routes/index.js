const newsRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {
    // app.get('/news',(req,res) => {
    //     // check value q trong req
    //     // console.log(req.query.q);
    //     res.render('news', {title: "post soccer"});
    // })
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/khoa-hoc', coursesRouter);

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
