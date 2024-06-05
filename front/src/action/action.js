import axios from "axios"


export const comprar = (producto) => {
console.log("producto action:",producto)
    return async function () {
        try {
            const response = await axios.post("http://localhost:3004/Mercado_Pago", {
                producto: producto,
            });
            const id=response.data;
            return id;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

