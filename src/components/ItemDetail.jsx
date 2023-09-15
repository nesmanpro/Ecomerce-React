import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import { Link } from "react-router-dom";

const ItemDetail = ( {itemDetail} ) => {

    return (
        <>      
            <Card key={itemDetail.id} className="max-h-lg hover:shadow-[0px_0px_50px_-15px_rgba(0,0,0,0.3)]">
                <CardHeader className="pt-2 flex-col items-start">
                    <h4 className="font-bold text-xl text-slate-900">{itemDetail.titulo}</h4>
                    <p className="text-md font-bold text-slate-400">{itemDetail.categoria.toUpperCase()}</p>
                </CardHeader>
                <CardBody className="py-2">
                    <Image alt="Card background" className="object-center object-cover rounded-xl" src={itemDetail.foto} width={270}/>
                </CardBody>
                <CardFooter className="flex flex-col items-start gap-5 bg-slate-200">
                    <p className="text-sm italic text-slate-800">{itemDetail.detalles}</p>
                    <p className="text-slate-50 text-2xl bg-red-500 rounded-full py-px px-6 my-2">€ {itemDetail.precio}</p>
                    
                    <div className="flex content-center gap-2">
                        <Link to='/productos'>
                            <Button className="text-tiny self-end text-white bg-slate-500" radius="full" size="sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                </svg>
                            </Button>                             
                        </Link>
                        <Button color='danger' variant="shadow" radius="full" size="sm">
                            Agregar al carrito
                        </Button>
                    </div>
                </CardFooter>
            </Card>            
        </>
    )
}

export default ItemDetail