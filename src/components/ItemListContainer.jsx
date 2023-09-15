import React, { useEffect, useState } from 'react'
import GetProducts from './GetProducts';
import ItemList from './ItemList';


const ItemListContainer = ({ title }) => {
    
    const [productos,  setProductos] = useState([]);


    useEffect(() => {
        GetProducts()
        .then((res) => {
            setProductos(res)
        }) 
    }, [])

    

    return (
        <>
            <div className='flex-col justify-center p-8'>
                <div className=' flex mb-8 justify-center'>
                    <h1 className="text-2xl font-bold text-slate-700">{title}</h1>
                </div>

                <div className='grid grid-cols-5 gap-4'> 
                    <ItemList productos={productos}/>
                </div>
            </div>
        </>
    )
}

export default ItemListContainer