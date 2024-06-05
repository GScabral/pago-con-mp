import React from "react"
import productos from "../../productos.json"
import { comprar } from "../action/action"
import { useState, useEffect } from "react"
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import Button from "react-bootstrap/Button";
import "./card.css"

const Card = () => {

    const [preferenceId, setPreferenceId] = useState(null);

    useEffect(() => {
        initMercadoPago("TEST-494d70dc-ca35-4c02-81b6-4c9c55aae4aa")

    }, [])


    const handleBuy = async (producto) => {
        try {
            const obtenerIdPrefe = comprar([producto]);
            const id = await obtenerIdPrefe();
            console.log("idpreference",id)
            if (id) {
                setPreferenceId(id);
            }
        } catch (error) {
            console.error("Error al crear la preferencia de compra", error)
        }
    }
    
    return (
        <div className="c-container">
            <div className="card-cont">
                {productos.map((producto) => (
                    <div className="card" key={producto.id}>
                        <img className="card-imagen" src={producto.imagen} alt="" />
                        <p>precio:€{producto.precio}</p>
                        <p>name:{producto.name}</p>
                        <p>cantidad:{producto.cantidad}</p>
                        <Button onClick={() => handleBuy(producto)}>comprar</Button >
                        {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card;
