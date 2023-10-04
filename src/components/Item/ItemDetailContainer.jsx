import { useContext, useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import getItemId from '../../helpers/GetItemId'
import { CartContext } from '../../context/ShoppingCartContext';

const ItemDetailContainer = () => {
    
    const { setCantidad } = useContext(CartContext)
    const [itemDetail,  setItemDetail] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        setCantidad(1);
        getItemId(id)
            .then((res) => {
                setItemDetail(res)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id])

    

    return (
        <>
            <div className='flex justify-center p-8'>
                    {itemDetail && <ItemDetail details={itemDetail}/>}
            </div>
        </>
    )
}

export default ItemDetailContainer