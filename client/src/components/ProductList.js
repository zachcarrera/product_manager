import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const ProductList = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        console.log("running useEffect from ProductList");
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                setProducts(res.data.products);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div>
            <h1>All Products</h1>
            {products.map((product) => (
                <p key={product._id}>
                    <Link to={`/${product._id}`}>{product.title}</Link>
                </p>
            ))}
        </div>
    );
};

export default ProductList;
