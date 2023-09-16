import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import getItemId from './GetItemId'


const ItemDetailContainer = () => {
    
    const [itemDetail,  setItemDetail] = useState(null);
    const { id } = useParams();
    const categoria = useParams().categoria;

    useEffect(() => {
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
                    {itemDetail && <ItemDetail itemDetail={itemDetail}/>}
            </div>
        </>
    )
}

export default ItemDetailContainer