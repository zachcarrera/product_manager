import React from "react";

export const DeleteButton = (props) => {
    return (
        <button className="btn btn-danger mx-1" onClick={props.handleClick}>
            Delete
        </button>
    );
};

export default DeleteButton;
