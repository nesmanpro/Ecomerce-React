import React from 'react'

const ItemListContainer = ({ greetings }) => {
    return (
        <>
            <div className='flex justify-center p-8'>

                <h2 className="text-1xl font-bold ">{greetings}</h2>
            </div>
        </>
    )
}

export default ItemListContainer