import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { ItemCount } from "./ItemCount";


const ItemDetail = ( {details} ) => {


    return (
        <>      
            <Card key={details.id} className="max-h-lg hover:shadow-[0px_0px_50px_-15px_rgba(0,0,0,0.3)]">
                <CardHeader className="pt-2 flex-col items-start">
                    <h4 className="font-bold text-xl text-slate-900">{details.titulo}</h4>
                    <p className="text-md font-bold text-slate-400">{details.categoria.toUpperCase()}</p>
                </CardHeader>
                <CardBody className="py-2">
                    <Image alt="Card background" className="object-center object-cover rounded-xl" src={details.foto} width={270}/>
                </CardBody>
                <CardFooter className="flex flex-col items-start gap-1 bg-slate-200">
                    <p className="text-sm italic text-slate-800">{details.detalles}</p>
                        
                            <p className="text-slate-50 text-2xl bg-red-500 rounded-full py-px px-5 my-2">€ {details.precio}</p>
                        
                            <ItemCount details={details} />
    
                        
                            <Button className="text-tiny self-start text-white bg-slate-500" radius="full" size="sm">
                                <Link to='/productos'>
                                    Atras
                                </Link>
                            </Button>                             
                        
                </CardFooter>
            </Card>            
        </>
    )
}

export default ItemDetail