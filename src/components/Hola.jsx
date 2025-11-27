// Importamos el hook useState desde React para manejar estado local en el componente
import { useState } from "react";

// Definimos el componente Hola, que recibe una prop llamada 'nombre'
export default function Hola({ nombre }) {
  // Creamos un estado llamado 'contador' inicializado en 0
  // 'setContador' es la función que usaremos para actualizar el valor de 'contador'
  const [contador, setContador] = useState(0);

  // Retornamos el JSX que se renderizará en pantalla
  return (
    <div> {/* Contenedor principal del componente */}
      <h1>Hola, {nombre}!</h1> {/* Mostramos el nombre recibido por props */}
      <p>Contador: {contador}</p> {/* Mostramos el valor actual del contador */}
      
      {/* Botón para aumentar el contador */}
      <button 
        onClick={() => setContador(contador + 1)} // Al hacer click, incrementamos el contador en 1
      >
        +1
      </button>

      {/* Botón para disminuir el contador */}
      <button 
        onClick={() => setContador(contador - 1)} // Al hacer click, decrementamos el contador en 1
      >
        -1
      </button>
    </div>
  );
}
