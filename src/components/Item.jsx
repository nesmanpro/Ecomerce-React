import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import { Link } from 'react-router-dom';

const Item = ( { producto } ) => {
    return (
        <>
            <Card key={producto.id} className=" max-w-xs">
                <CardHeader className="pb-0 pt-2 px- flex-col items-start">
                    <h4 className="font-bold text-large text-slate-800">{producto.titulo}</h4>
                </CardHeader>
                <CardBody className="py-2">
                    <Image alt="Card background"
                    className="object-center object-cover rounded-xl" src={producto.foto} width={270}/>
                </CardBody>
                <CardFooter className=" ">
                    <Button className="text-tiny text-white bg-slate-500" radius="full" size="sm">
                        <Link to={`/item/${producto.id}`}>Ver más</Link>
                        
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default Item