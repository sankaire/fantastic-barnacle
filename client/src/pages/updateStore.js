import axios from "axios";
import React, { useState } from "react";

export default function Updatestore({ open, onClose, id }) {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async () => {
        const store = await axios.patch(
            "https://umbrella-2gw5.onrender.com/api/v1/stores/" + id,
            {
                name,
                location,
                phone,
                email,
            }
        );
        console.log(store);
        alert("Store updated successfully");
    };
    if (!open) return null;
    return (
        <div className="flex flex-col m-5 p-10 w-full" >
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
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    name="location"
                    id="location"
                    value={location}
                    onChange={(e) => {
                        setLocation(e.target.value);
                    }}
                />
                <label htmlFor="phone">Phone</label>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={(e) => {
                        setPhone(e.target.value);
                    }}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
                    update
                </button>
            </form>
        </div>
    );
}
