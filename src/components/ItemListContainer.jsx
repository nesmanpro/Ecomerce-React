import React, { useEffect, useState } from 'react'
import GetProducts from './GetProducts';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    
    const [productos,  setProductos] = useState([]);
    const [titulo, setTitulo] = useState('Productos')
    const categoria = useParams().categoria;


    useEffect(() => {
        GetProducts()
        .then((res) => {
            if(categoria){
                setProductos( res.filter((product) => product.categoria === categoria) );
                setTitulo(categoria)
            } else {
                setProductos(res)
                setTitulo('Productos')
            }
        }) 
    }, [categoria, titulo])

    

    return (
        <>
            <div className='flex-col justify-center p-8'>
                <div className=' flex mb-8 justify-center'>
                    <h1 className="text-2xl font-bold text-slate-700 uppercase">{titulo}</h1>
                </div>

                <div className='grid grid-cols-5 gap-4'> 
                    <ItemList productos={productos} titulo={titulo}/>
                </div>
            </div>
        </>
    )
}

export default ItemListContainer