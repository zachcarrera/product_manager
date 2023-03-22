import React from "react";
import { useState } from "react";

export const ProductForm = (props) => {
    const [title, setTitle] = useState(props.title);
    const [price, setPrice] = useState(props.price);
    const [description, setDescription] = useState(props.description);

    const handleSubmit = (event) => {
        event.preventDefault();

        props.handleSubmit({ title, price, description });

        setTitle("");
        setPrice("");
        setDescription("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-25 p-4 rounded mx-auto shadow my-3"
        >
            <div className="mb-1">
                <label className="form-input">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                />
            </div>
            <div className="mb-1">
                <label className="form-input">Price</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="form-control"
                />
            </div>
            <div className="mb-1">
                <label className="form-input">Description</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                />
            </div>
            <input
                type="submit"
                value={props.buttonLabel}
                className="btn btn-primary mt-2"
            />
        </form>
    );
};

export default ProductForm;
