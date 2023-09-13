import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

const Item = ( {foto, titulo, id, precio} ) => {
    return (
        <>
            <Card key={id} className=" max-w-xs">
                                <CardHeader className="pb-0 pt-2 px- flex-col items-start">
                                    <h4 className="font-bold text-large text-slate-800">{titulo}</h4>
                                    <p className="text-slate-200 bg-slate-600 p- rounded-full py-px px-2 my-2">€ {precio}</p>
                                    <p className="text-tiny uppercase font-bold text-slate-800"></p>
                                </CardHeader>
                                <CardBody className="py-2">
                                    <Image
                                    alt="Card background"
                                    className="object-center object-cover rounded-xl" src={foto} width={270}/>
                                </CardBody>
                                <CardFooter className=" ">
                                    <Button className="text-tiny text-white bg-slate-500" radius="full" size="sm">Comprar</Button>
                                </CardFooter>
                            </Card>
        </>
    )
}

export default Item