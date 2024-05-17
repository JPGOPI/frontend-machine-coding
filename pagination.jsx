import React from "react";
import {useState, useEffect} from "react";
import "./style.css";

export default function App() {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(5);

  const apiCall = async () => {
    try {
      let resp = await fetch(`https://dummyjson.com/products/`);
      const data = await resp.json();
      setProducts(data.products);
      
    } catch {
      console.error("not found");
    }
  }

  useEffect(() =>{
    apiCall();
  },[])

  const Items = ( (img) => {
    debugger
    return (
      <div>
        <img src={img.img}></img>
        <h2>{img.titlee}</h2>
      </div>
    )
  });
  return (
    <div>
      <h1 style={{ marginLeft: "30px" }}>Pagination</h1>
      {/* <h2>{products[0]}</h2> */}
      {products.map((product) => (
            <Items img = {product.images[0]} titlee = {product.brand}/>
      ))}
    </div>
  );
}
