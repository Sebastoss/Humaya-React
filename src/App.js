import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./componentes/Header";
import Productos from "./componentes/Productos";

function App() {
  
  const prods = [
      {id:1, title: "Dulce de leche tradicional", text: "Elaboración artesanal de principio a fin, con un sabor intenso, receta tradicional.", text2: "Presentación en frasco de vidrio de 580gr.", image: "img/Producto1.png", destacado: false},
      {id:2, title: "Dulce de leche sin azúcar", text: "Elaboración artesanal para cuidar tu silueta sin renunciar a nada, endulzado naturalmente con stevia.", text2: "Presentación en frasco de vidrio de 580gr y 280gr.", image: "img/Dulce-de-leche-2.jpg", destacado: false},
      {id:3, title: "Dulce Choconutt", text: "Elaboración artesanal para el capricho dulce, combinación de dulce de leche, chocolate y pasta de avellanas. Una delicia única.", text2: "Presentación en frasco de vidrio de 280gr.", image: "img/Producto3.png", destacado: false},
      {id:4, title: "Alfajores de Maicena", text: "Alfajores de dulce con coco rallado, relleno con 2cm de pura dulzura. Pudiendo elegir entre el dulce de leche tradicional, lighto choconutt.", text2: "Presentación en caja de 6 y 12 alfajores.", image: "img/alfajores-maicena.jpg", destacado: true}
    ]

  return (
    <div className="container-fluid p-0">
      <Header />
      <div id="productos" className="productos-encabezado">
            <h1 className='p-4 m-0 text-center text-uppercase h3'>Productos</h1>
        </div>
        {prods.map(producto => (

              <Productos key={producto.id} pos={producto.id % 2 !== 0 && producto.destacado === false ? "1": "2"} title={producto.title} text={producto.text} text2={producto.text2} image={producto.image} destacado={producto.destacado} /> 
            
        ))}

    </div>
  );
}

export default App;
