import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Dashboard = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [products, setProducts] = useState([]);
    useEffect(() => {
        // console.log("running useEffect from ProductList");
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                setProducts(res.data.products);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const addProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:8000/api/products/new", {
                title,
                price,
                description,
            })
            .then((res) => {
                console.log(res.data);
                addProduct(res.data.product);
            })
            .catch((error) => {
                console.log(error);
            });
        setTitle("");
        setPrice("");
        setDescription("");
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Price</label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Description</label>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <input type="submit" value="Create" />
                </form>
            </div>
            <div>
                <h1>All Products</h1>
                {products.map((product) => (
                    <p key={product._id}>
                        <Link to={`/${product._id}`}>{product.title}</Link>
                    </p>
                ))}
            </div>
        </>
    );
};

export default Dashboard;
