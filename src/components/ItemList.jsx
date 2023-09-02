import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";


const ItemList = ( {productos} ) => {
    return (
        <>
            {
                productos.length > 0 &&
                productos.map((producto) => {
                    return (
                            <Card key={producto.id} className=" max-w-xs">
                                <CardHeader className="pb-0 pt-2 px- flex-col items-start">
                                    <h4 className="font-bold text-large text-slate-800">{producto.titulo}</h4>
                                    <p className="text-slate-200 bg-slate-600 p- rounded-full py-px px-2 my-2">€ {producto.precio}</p>
                                    <p className="text-tiny uppercase font-bold text-slate-800"></p>
                                </CardHeader>
                                <CardBody className="py-2">
                                    <Image
                                    alt="Card background"
                                    className="object-center object-cover rounded-xl" src={producto.foto} width={270}/>
                                </CardBody>
                                <CardFooter className=" ">
                                    <Button className="text-tiny text-white bg-slate-500" radius="full" size="sm">Comprar</Button>
                                </CardFooter>
                            </Card>
                        )

                        })
                    }
        </>
    )
}

export default ItemList