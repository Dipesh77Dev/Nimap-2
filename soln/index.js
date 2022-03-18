const express = require('express');
const server = express();
const productRouter = require('./router/product.js');
const categoryRouter = require('./router/category.js');
const db = require('./models/db.js')

// const bodyParser = require( 'body-parser' );
// const jwt = require( 'jsonwebtoken' );
const cors = require( 'cors' );
server.use( cors() );
server.set('view engine', 'ejs');

// server.use( 'public/data/uploads', express.static( 'public' ) )
server.use( express.static( __dirname ) );
server.use( express.json( { limit: "50mb" } ) );
server.use( express.urlencoded( { extended: false } ) );
server.use( express.json() );

db.mongoose.connect(
    db.url,
).then(()=>{
   console.log('MongoDb connection has been successfully done');
   server.listen(3000, () => {
    console.log("Server has been started at port 3000");
});
}).catch(
    err => {
        console.log('MongoDb connection failed', err);
    }
);

server.use(express.json());

server.get("/", (req, res) => {
    res.send("Welcome All!!!");
})

server.use('/product', productRouter.router);
server.use('/category', categoryRouter.router);

// server.listen(3000, () =>{
//     console.log("All are Working, Server is running on port 3000");
// })