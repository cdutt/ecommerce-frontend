import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { useSearchParams } from "react-router";
import { ProductsGrid } from "./ProductsGrid";

import "./HomePage.css";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]); //setProducts = updater function which 1)lets us update the vale and regenerate the HTML
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const getHomeData = async () => {
      const urlPath = search
        ? `/api/products?search=${search}`
        : "/api/products";
      const response = await axios.get(urlPath);
      setProducts(response.data);
    };

    getHomeData();
    //[]=> Dependency array = lets us control when useEffect runs, []= only run once
  }, [search]);
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
