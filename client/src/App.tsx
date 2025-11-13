import React, { useState } from 'react';

function App() {

  const [products, setProducts] = useState<{name: string, price: number}[]>([]);


const addProduct = () => {
  setProducts(prevState => [...prevState,{name:'Product' + (prevState.length+1), price: (prevState.length*100)+100}])
}

  return (
    <> 
      <h1 style={{color: 'red'}}>Product List</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </>
  )
}

export default App
