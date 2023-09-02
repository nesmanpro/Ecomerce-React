import React, { useEffect, useState } from 'react'
import PedirProductos from './PedirProductos';
import ItemList from './ItemList';


const ItemListContainer = ({ greetings }) => {
    
    const [productos,  setProductos] = useState([]);


    useEffect(() => {
        PedirProductos()
        .then((res) => {
            setProductos(res)
        }) 
    }, [])

    

    return (
        <>
            <div className='flex-col justify-center p-8'>
                <div className=' flex mb-8 justify-center'>
                    <h1 className="text-2xl font-bold ">{greetings}</h1>
                </div>

                <div className='grid grid-cols-5 gap-4'> 
                    <ItemList productos={productos}/>
                </div>
            </div>
        </>
    )
}

export default ItemListContainer