import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Createstore from './Createstore'
import Updatestore from './updateStore'

export default function Stores() {
    const [stores, setStores] = useState([])
    const [open, setOpen] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)
    useEffect(() => {
        const getStores = async () => {
            const stores = await axios.get('https://umbrella-2gw5.onrender.com/api/v1/stores')
            console.log(stores)
            setStores(stores.data)
        }
        getStores()
    }, [])
    const deleteOperation = async (id) => {
        const deleteProduct = await axios.delete(
            `https://umbrella-2gw5.onrender.com/api/v1/stores/${id}`
        );
        alert('Store Deleted')
    };
    return (
        <div className='flex w-full justify-evenly '>
            {stores.map((store) => (
                <div className='flex-1 mt-6 mr-5 ml-5 p-8 rounded-xl cursor-pointer shadow-xl ' key={store._id}>
                    <h1 className='text-center'> Name: {store.name}</h1>
                    <h1 className='text-center'>Phone: {store.phone}</h1>
                    <h1 className='text-center'>Location: {store.location}</h1>
                    <h1 className='text-center'>Email: {store.email}</h1>
                    <br />
                    <div className='flex justify-evenly'>
                        <h1 className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setOpen(true)}>Create</h1>
                        <h1 className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={() => setOpenUpdate(true)} >Update</h1>
                        <h1 className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => deleteOperation(store._id)}>Delete</h1>
                    </div>
                    <Updatestore open={openUpdate} onClose={() => setOpenUpdate(false)} id={store._id} />
                </div>
            ))}
            <Createstore open={open} onClose={() => setOpen(false)} />
        </div>
    )
}
