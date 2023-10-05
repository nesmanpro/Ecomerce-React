import { Card, CardFooter, Button, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { ItemCount } from "./ItemCount";



const ItemDetail = ({ details }) => {



    return (

        <>
            <Card key={details.id}
                className="max-w-2xl hover:shadow-[0px_0px_50px_-15px_rgba(0,0,0,0.3)] ">

                <div className="flex-col pb-8">

                    <Image alt="Card background" className="pb-4 overflow-hidden" src={details.foto} />
                    <h4 className="font-bold text-center text-2xl text-red-500 mt-1">{details.titulo}</h4>

                </div>
                <CardFooter className="flex flex-col items-start gap-1 bg-slate-200">
                    <p className="text-md italic text-slate-800 mb-4">{details.detalles}</p>

                    <p className="text-slate-50 text-2xl bg-red-500 rounded-full py-px px-5 my-2">€ {details.precio}</p>

                    <ItemCount details={details} />


                    <Button as={Link} to='/productos' className="text-tiny self-start text-white bg-slate-500" radius="full" size="sm">
                        Atras
                    </Button>

                </CardFooter>
            </Card>
        </>
    )
}

export default ItemDetail