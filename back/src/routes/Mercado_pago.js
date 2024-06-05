const { Router } = require("express")
const { MercadoPagoConfig, Preference } = require('mercadopago');
const dotenv = require("dotenv")



dotenv.config();
const Mercado_Pago = Router();


const client = new MercadoPagoConfig({ accessToken: process.env.ACCESS_TOKEN })



Mercado_Pago.post("/", async (req, res) => {

    const { producto } = req.body;

    if (!producto || !Array.isArray(producto)) {
        return res.status(400).json({ error: "El cuerpo de la solicitud debe contener un arreglo de productos" });
    }

    const infoProducto = producto.map((items) => {
        return {
            title: items.name,
            quantity: parseInt(items.cantidad),
            currency_id: 'ARS',
            unit_price: parseFloat(items.precio),
        };
    })


    try {
        const body = {
            items: infoProducto,

            back_urls: {
                success: "https://www.youtube.com/",
                failure: "https://www.youtube.com/",
                pending: "https://www.youtube.com/",
            },
            auto_return: 'approved'
        }
        const preference = new Preference(client);
        const result = await preference.create({ body })
        res.status(200).json(result.id)
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        res.status(400).json({ error: error.message });
    }
})

module.exports = Mercado_Pago;

