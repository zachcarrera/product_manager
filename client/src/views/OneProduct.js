import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const OneProduct = () => {
    const [product, setProduct] = useState(null);
    const { _id } = useParams();
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

    if (product === null) {
        return <p>Loading...</p>;
    }

    const { title, price, description } = product;

    return (
        <div>
            <h2>{title}</h2>
            <p>Price: ${price}</p>
            <p>{description}</p>
        </div>
    );
};

export default OneProduct;
