import React from 'react'
import Item from './Item'


const ItemList = ( {productos} ) => {
    return (
        <>
            {
                productos.length > 0 &&
                productos.map((producto) => {
                    return (

                        <Item 
                            key={producto.id}
                            id={producto.id}
                            titulo={producto.titulo}
                            precio={producto.precio}
                            foto={producto.foto}
                        />
                        )
                        })
                    }
        </>
    )
}

export default ItemList