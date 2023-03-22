import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ProductForm } from "../components/ProductForm";

export const EditProduct = () => {
    const { _id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${_id}`)
            .then((res) => {
                const { title, price, description } = res.data.product;
                setTitle(title);
                setPrice(price);
                setDescription(description);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [_id]);

    const handleUpdateSubmit = (formData) => {
        axios
            .put(`http://localhost:8000/api/products/update/${_id}`, formData)
            .then((res) => {
                navigate(`/${_id}`);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div>
            <h1 className="my-2">Edit Product</h1>
            {title && price && description && (
                <ProductForm
                    handleSubmit={handleUpdateSubmit}
                    title={title}
                    price={price}
                    description={description}
                    buttonLabel="Update"
                />
            )}
        </div>
    );
};

export default EditProduct;
