const { Router } = require("express")
const { MercadoPagoConfig, Preference } = require('mercadopago');
const dotenv = require("dotenv")



dotenv.config();
const Mercado_Pago = Router();


const client = new MercadoPagoConfig({ accessToken: process.env.ACCESS_TOKEN })



Mercado_Pago.post("/", async (req, res) => {

    const productos = req.body;

    const producto = productos.map((items) => {
        return {
            title: items.name,
            quantity: items.cantidad,
            currency_id: 'ARS',
            unit_price: items.precio,
        };
    })

try {
    const body = {
        compra: producto,

        back_urls: {
            success: "https://www.youtube.com/",
            failure: "https://www.youtube.com/",
            pending: "https://www.youtube.com/"
        },
        auto_return: 'approved'
    }
    const preference = new Preference(client);
    const result = await preference.create({ body })
    res.status(200).json(result)
} catch (error) {
    console.error(error.message)
    res.status(400).json({ error: error.message })
}
})

module.exports = Mercado_Pago;

