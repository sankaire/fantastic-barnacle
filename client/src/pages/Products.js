import React, { useState, useEffect } from "react";
import axios from "axios";
import Addproduct from "./Addproduct";
import Updateproduct from "./Updateproduct";

export default function Products() {
    const [data, setData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        const getProducts = async () => {
            const products = await axios.get(
                "https://umbrella-2gw5.onrender.com/api/v1/products/"
            );
            setData(products.data);
        };
        getProducts();
    }, []);
    const deleteOperation = async (id) => {
        const deleteProduct = await axios.delete(
            `https://umbrella-2gw5.onrender.com/api/v1/products/${id}`
        );
        console.log(deleteProduct);
    };

    return (
        <div className="flex flex-col m-5 p-10 w-full">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setOpenModal(true)}
            >
                Create Product
            </button>
            <Addproduct open={openModal} onClose={() => setOpenModal(false)} />
            <table className="table-fixed">
                <thead>
                    <tr>
                        <th className="w-1/4">ID</th>
                        <th className="w-1/4">Image</th>
                        <th className="w-1/4">Name</th>
                        <th className="w-1/4">Stock</th>
                        <th className="w-1/4">Description</th>
                        <th className="w-1/4">Cartegory</th>
                        <th className="w-1/4">Price</th>
                        <th className="w-1/4">Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data) => (
                        <tr key={data._id}>
                            <td className="border px-4 py-2">{data._id}</td>
                            <td className="border px-4 py-2">
                                <img className="w-1/4" src={data.image} />
                            </td>
                            <td className="border px-4 py-2">{data.name}</td>
                            <td className="border px-4 py-2">{data.countInStock}</td>
                            <td className="border px-4 py-2">{data.description}</td>
                            <td className="border px-4 py-2">{data.cartegory}</td>
                            <td className="border px-4 py-2">{data.price}</td>
                            <td className="border px-4 py-2">
                                <span
                                    onClick={() => deleteOperation(data._id)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-4 rounded"
                                >
                                    Delete
                                </span>
                                <span
                                    onClick={() => setOpenModal(true)}
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Udate
                                </span>{" "}
                                <Updateproduct open={openModal} onClose={() => setOpenModal(false)} id={data._id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
