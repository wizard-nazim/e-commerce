import type { Product } from "../../app/models/product";
import ProductsList from "./ProductList";   // keep this!

type Props = {
  products: Product[]
}

export default function Catalog({ products }: Props) {
  return (
    <>
      <ProductsList products={products} />    {/* FIXED */}
     
    </>
  );
}
