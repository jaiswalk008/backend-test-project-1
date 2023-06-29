const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');

const server = express();
server.use(cors());
server.use(bodyParser.json({extended:false}));
server.use(bodyParser.urlencoded({extended:false}));

//getting the routes
const productRoutes = require('./routes/productRoutes');

server.use('/admin',productRoutes);

async function startServer(){
    try{
        await sequelize.sync();
        server.listen(4000);
    }catch(err){console.log(err);}
}
startServer();