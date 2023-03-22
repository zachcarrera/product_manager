import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ProductForm } from "../components/ProductForm";
import ProductList from "../components/ProductList";

export const Dashboard = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
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

    const handleSubmit = (formData) => {
        axios
            .post("http://localhost:8000/api/products/new", formData)
            .then((res) => {
                console.log(res.data);
                addProduct(res.data.product);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleDeleteFromList = (deleteId) => {
        console.log(deleteId);
        axios
            .delete(`http://localhost:8000/api/products/${deleteId}`)
            .then((res) => {
                setProducts(
                    products.filter((product) => product._id !== deleteId)
                );
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <ProductForm
                handleSubmit={handleSubmit}
                buttonLabel="Create"
                title=""
                price=""
                description=""
            />

            <ProductList
                products={products}
                handleDelete={handleDeleteFromList}
            />
        </>
    );
};

export default Dashboard;
