import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";

import { ProductsGrid } from "./ProductsGrid";

import "./HomePage.css";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]); //setProducts = updater function which 1)lets us update the vale and regenerate the HTML

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };

    getHomeData();
  }, []); //[]=> Dependency array = lets us control when useEffect runs, []= only run once

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
