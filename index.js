require('dotenv').config();
console.log(process.env.SESSION_SECRET);

const express  = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const UserRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const productsRoute = require('./routes/products.route');
const authMiddleware = require('./middlewares/auth.middlewares');
const sessionMiddleware = require('./middlewares/session.middlewares');
const cartRoute = require('./routes/cart.route');
const transferRoute = require('./routes/transfer.route');
const homeRoute = require('./routes/home.route');
const apiProductsRoute = require('./api/route/products.route');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});
// chong hack
//const csurf = require('csurf');


const port = 3000;
const app = express();
app.set('view engine','pug');
app.set('views','./views');
//su dung bodyParser to get POST
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser('Nam&Phuong'));

// app.get('/',(req,res) => {
//     const user = db.get('users').find({
//         id: req.signedCookies.userID
//     }).value();
//     let qty = 0;
//     res.render('index',{
//         user: user,
//         qty:qty
//     })
// });
app.use('/', homeRoute);
app.use('/products',authMiddleware.requireAuthProduct, productsRoute);
app.use('/users',authMiddleware.requireAuth, UserRoute);
app.use(sessionMiddleware);
app.use('/auth',authMiddleware.requireAuthProduct, authRoute);
app.use('/cart',authMiddleware.requireAuthProduct, cartRoute);
app.use('/transfer',authMiddleware.requireAuth, transferRoute);
app.use('/api/products', apiProductsRoute);

//app.use(csurf());
// app.get('/styles/costom.css',(req,res) => {
//     res.send("Style View")
// })
app.use(express.static('public'));

app.listen(port,() => console.log(`Example app listening on port ${port}!`))

