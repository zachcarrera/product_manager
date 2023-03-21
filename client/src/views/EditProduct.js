import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

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

    const handleUpdateSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        axios
            .put(`http://localhost:8000/api/products/update/${_id}`, {
                title,
                price,
                description,
            })
            .then((res) => {
                navigate(`/${_id}`);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            EditProduct {_id}
            <form onSubmit={handleUpdateSubmit}>
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
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default EditProduct;
