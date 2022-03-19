const db = require('../models/db.js')
const Product = db.productSchema

exports.create =(req, res) => {
    // res.json("create")
    const product = new Product({
        name: req.body.name,
        category : req.body.category,
        price : req.body.price,
        description: req.body.description,
        image : req.file.path
    })
    // console.log("image" , req , req.file , req.file.path)
    product.save(product).then(
        data => {
            res.send(data);
        }
    ).catch(
        err =>{
            res.status(500).send(err)
        })
}

exports.findAll =(req, res) => {
    // const title=req.query.title
    // var condition=title?{title:{$regex:new RegExp(title)}}:{}
    Product.find().then(
        data => {
            res.render('product' , {"products":data}); 
            // res.send(data)
        }
    ).catch(
        err =>{ 
            res.status(500).send(err)
        })
}

// exports.findByID=(req,res)=>{
//     Product.findById(req.params.id).then(
//         data=>{
//             res.send(data)
//         }
//     ).catch(
//         err=>{
//             res.status(500).send(err)
//         }
//     )
// }

exports.update =(req, res) => {
    // res.json("update")
    Product.findByIdAndUpdate(req.params.id, req.body).then(
        data =>{
            res.send(data);
        }
    ).catch(
        err => {
            res.status(500).send(err)
        })
}

exports.deleteById =(req, res) => {
    // res.json("deleteById")
    Product.findByIdAndRemove(req.params.id).then(
        data => {
            if(!data){
                res.send("No data/id has been found");
            }else{
            res.send(data + "documents deleted")
        }}
    ).catch(
        err =>{
            res.status(500).send(err)
        })
}

exports.deleteAll =(req, res) => {
    // res.json("deleteAll")
    Product.deleteMany({}).then(
        data => {
            res.send(data+ "documents deleted")
        }
    ).catch(
        err =>{
            res.status(500).send(err)
        })
}