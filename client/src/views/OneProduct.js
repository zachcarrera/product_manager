import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { DeleteButton } from "../components/DeleteButton";

export const OneProduct = () => {
    const [product, setProduct] = useState(null);
    const { _id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${_id}`)
            .then((res) => {
                setProduct(res.data.product);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [_id]);

    const deleteProduct = () => {
        axios
            .delete(`http://localhost:8000/api/products/${_id}`)
            .then((res) => {
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    if (product === null) {
        return <p>Loading...</p>;
    }

    const { title, price, description } = product;

    return (
        <div className="mt-5 w-50 rounded shadow border mx-auto p-3">
            <h2>{title}</h2>
            <p>Price: ${price}</p>
            <p>{description}</p>
            <DeleteButton handleClick={() => deleteProduct()} />
        </div>
    );
};

export default OneProduct;
