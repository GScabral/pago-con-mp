import './App.css'
import "../productos.json"

function App() {

  return (
   <>
   {productos.map((producto)=>(
    <div>
      <p>precio:{producto.precio}</p>
      <p>name:{producto.name}</p>
      <p>cantidad:{producto.cantidad}</p>
    </div>
   ))}
   </>
  )
}

export default App
