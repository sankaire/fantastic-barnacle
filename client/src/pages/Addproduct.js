import axios from "axios";
import React, { useState } from "react";

export default function Addproduct({ open, onClose }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [cartegory, setCartegory] = useState("");
    const [countInStock, setCountInStock] = useState(0);

    const handleSubmit = async () => {
        const product = await axios.post(
            "https://umbrella-2gw5.onrender.com/api/v1/products/",
            {
                name,
                price,
                image,
                description,
                cartegory,
                countInStock,
            }
        );
        console.log(product);
    };
    if (!open) return null;
    return (
        <div className="flex flex-col m-5 p-10 w-full">
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    valur={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <label htmlFor="price">Price</label>
                <input
                    type="text"
                    name="price"
                    id="price"
                    value={price}
                    onChange={(e) => {
                        setPrice(e.target.value);
                    }}
                />
                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    name="image"
                    id="image"
                    value={image}
                    onChange={(e) => {
                        setImage(e.target.value);
                    }}
                />
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                />
                <label htmlFor="cartegory">Cartegory</label>
                <input
                    type="text"
                    name="cartegory"
                    id="cartegory"
                    value={cartegory}
                    onChange={(e) => {
                        setCartegory(e.target.value);
                    }}
                />
                <label htmlFor="countInStock">Stock</label>
                <input
                    type="text"
                    name="countInStock"
                    id="countInStock"
                    value={countInStock}
                    onChange={(e) => {
                        setCountInStock(e.target.value);
                    }}
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
                    Submit
                </button>
            </form>
        </div>
    );
}
