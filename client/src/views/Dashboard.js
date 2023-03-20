import React from "react";
import { useState } from "react";
import axios from "axios";

export const Dashboard = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");

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
            })
            .catch((error) => {
                console.log(error);
            });
        setTitle("");
        setPrice("");
        setDescription("");
    };

    return (
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
    );
};

export default Dashboard;
