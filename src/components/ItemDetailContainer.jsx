import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import getItemId from './GetItemId'
import GetProducts from './GetProducts';


const ItemDetailContainer = () => {
    
    const [itemDetail,  setItemDetail] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        getItemId(id)
            .then((res) => {
                setItemDetail(res)
            }) 
    }, [id])

    

    return (
        <>
            <div className='flex justify-center p-8'>
            
                    {itemDetail && <ItemDetail itemDetail={itemDetail}/>}
            </div>
        </>
    )
}

export default ItemDetailContainer