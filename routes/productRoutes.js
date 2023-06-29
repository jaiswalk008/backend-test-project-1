const express = require('express');
const router  = express.Router();

const productsController = require('../controller/products');

//route for getting the products
router.get('/',productsController.getAddProduct);
//post route for adding a product in the database
router.post('/',productsController.postAddProduct);
//route for deketing the product
router.delete('/delete/:id',productsController.deleteProduct);

module.exports = router;