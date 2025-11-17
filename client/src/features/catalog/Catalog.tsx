import { useEffect, useState } from "react";
import type { Product } from "../../app/models/product";
import ProductsList from "./ProductList";   // keep this!


export default function Catalog(){
    const [products, setProducts] = useState<Product[]>([]);
    
      useEffect(() => {
        fetch('https://localhost:5006/api/products')
          .then(response => response.json())
          .then(data => setProducts(data));
      }, [])
  return (
    <>
      <ProductsList products={products} />    {/* FIXED */}
     
    </>
  );
}
