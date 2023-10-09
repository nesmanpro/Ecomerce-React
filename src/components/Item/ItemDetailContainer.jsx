import { useContext, useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/ShoppingCartContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/data'



const ItemDetailContainer = () => {

    // Obteniendo funciones y datos del contexto del carrito
    const { setCantidad } = useContext(CartContext)
    const [itemDetail, setItemDetail] = useState(null);

    // Obteniendo el ID del producto de los parámetros de la URL
    const id = useParams().id;


    useEffect(() => {
        setCantidad(1);

        // Obteniendo el producto de la base de datos usando el ID
        const docData = doc(db, 'productos', id);
        getDoc(docData)
            .then((snapshot) => {

                // Actualizando el estado con los detalles del producto
                setItemDetail(
                    { ...snapshot.data(), id: snapshot.id }
                )
            })

    }, [id])



    return (
        <>
            <div className='flex justify-center p-8'>
                {itemDetail && <ItemDetail details={itemDetail} />}
            </div>
        </>
    )
}

export default ItemDetailContainer