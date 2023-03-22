import React from "react";
import { Link } from "react-router-dom";
import { DeleteButton } from "./DeleteButton";

export const ProductList = ({ products, handleDelete }) => {
    return (
        <div className="w-50 mx-auto">
            <h1>All Products</h1>
            {products.map((product) => (
                <div
                    key={product._id}
                    className="shadow mb-4 rounded border p-4"
                >
                    <p>
                        <Link className="h3" to={`/${product._id}`}>
                            {product.title}
                        </Link>
                    </p>

                    <Link
                        className="btn btn-warning mx-1"
                        to={`/${product._id}/edit`}
                    >
                        Edit
                    </Link>

                    <DeleteButton
                        handleClick={() => handleDelete(product._id)}
                    />
                </div>
            ))}
        </div>
    );
};

export default ProductList;
