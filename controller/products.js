const Product = require('../model/product');

exports.getAddProduct = async (req,res) =>{
    try{
        const products =await Product.findAll();
        res.json(products);
    }catch(err) {console.log(err)};
}
exports.postAddProduct = async (req,res) =>{
    try{
        const product = await Product.create({...req.body});
        res.json(product);
    }catch(err) {console.log(err)};
}
exports.deleteProduct = async (req,res) =>{
    const prodId = req.params.id;
    try{
        const product = await Product.findByPk(prodId);
        await product.destroy();
        res.sendStatus(200);
    }catch(err) {console.log(err)};
}