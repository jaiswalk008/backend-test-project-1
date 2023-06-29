const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Product = sequelize.define('product' , {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull: false,
        autoIncrement : true
    },
    price:{
        type:Sequelize.DECIMAL,
        allowNull:false
    },
    name:{
        type: Sequelize.STRING,
        allowNull:false
    }

})
module.exports = Product;