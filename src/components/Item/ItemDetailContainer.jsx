import { useContext, useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/ShoppingCartContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/data'



const ItemDetailContainer = () => {

    const { setCantidad } = useContext(CartContext)
    const [itemDetail, setItemDetail] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        setCantidad(1);
        const docData = doc(db, 'productos', id);
        getDoc(docData)
            .then((res) => {
                setItemDetail(
                    { ...res.data(), id: res.id }
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