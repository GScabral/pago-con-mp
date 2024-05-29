const express = require('express');
const cors = require('cors');
const Mercado_Pago= require("./routes/Mercado_pago")


const server = express();


server.use(express.json({ limit: '50mb' }));
server.use(cors())
server.use("/Mercado_pago",Mercado_Pago)



module.exports= server;