import { useContext, useState } from 'react'
import { CartContext } from '../../context/ShoppingCartContext'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase/data'




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Checkout = () => {


    const [orderId, setOrderId] = useState('');
    const { cart, precioTotal, eliminarProducto, deleteCartItem } = useContext(CartContext);
    const navigate = useNavigate()




    const { register, handleSubmit } = useForm();
    const comprar = (data) => {
        const order = {
            cliente: data,
            productos: cart,
            total: precioTotal()
        }

        const prodData = collection(db, 'orders')
        addDoc(prodData, order)
            .then((docu) => {
                setOrderId(docu.id)
                eliminarProducto()
            })
    }

    const [purchaseId, setPurchaseId] = useState('')
    const [agreed, setAgreed] = useState(false)


    if (orderId) {
        return (
            <div className="isolate bg-white px-6 pt-24 lg:px-8">

                <div
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                    aria-hidden="true">
                    <div
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                        style={
                            {
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }
                        }
                    />
                </div>

                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Compra Realizada 🎉</h1>
                    <h2 className="mt-2 text-xl justify-center">
                        Muchisimas gracias por tu compra!!
                    </h2>
                    <h3 className='text-xl mt-3'>
                        El ID de tu pedido es: <span className='font-bold'>{orderId}</span>
                    </h3>

                </div>
            </div>

        )
    }

    return (
        <>

            {/* // Productos de carrito  */}
            <div className="isolate bg-white px-6 pt-24 lg:px-8">

                <div
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                    aria-hidden="true">
                    <div
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Carrito</h2>
                    {cart.length === 0
                        ? <p className='mt-4 text-xl text-gray-500'>No hay productos en el carrito.</p>
                        : (
                            cart.length < 2
                                ? <p className='mt-4 text-xl text-gray-500'>Esto es lo que tienes ahora mismo en el carrito: </p>
                                : <p className="mt-4 text-xl text-gray-500">
                                    Estos son los productos que tienes ahora mismo en el carrito:
                                </p>
                        )
                    }

                    <div className='my-5 '>

                        {cart.map((prod) => (
                            <div key={prod.id} className='mb-2 p-2 max-h-36 bg-slate-200 rounded-lg text-slate-950 flex-col overflow-hidden shadow-md'>
                                <div className='flex gap-3 justify-between text-center items-center'>
                                    <div className='w-32'>
                                        <img className="min-w-unit-24 object-cover rounded-md" src={prod.foto} alt="" />
                                    </div>
                                    <div className='text-md sm:text-xl text-left mb-3'>
                                        <h2 className='font-bold'> {prod.titulo} </h2>
                                    </div>
                                    <div className=''>
                                        <small className='sm:visible'>Cantidad</small>
                                        <p className='font-bold'>{prod.cantidad}</p>
                                    </div>
                                    <div className='hidden md:flex'>
                                        <div>
                                            <small className=''>Unidad</small>
                                            <p className='font-bold'>{prod.precio} €</p>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <small className=''>Subtotal</small>
                                        <p className='font-bold'>{prod.precio * prod.cantidad} €</p>
                                    </div>
                                    <div onClick={(e) => deleteCartItem(e, prod.id)} className='mr-6'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {cart.length === 0
                        ? <small onClick={() => navigate('/productos')} className=' cursor-pointer ml-3 py-3 px-4 bg-slate-500 text-slate-50 rounded-full'>Seguir comprando</small>
                        :
                        <>
                            <div className='flex justify-between text-2xl mx-4 mr-8'>

                                <h1 className=' text-slate-950 font-bold '>
                                    Precio Total:
                                </h1>
                                <h1 className=' text-slate-950 font-bold '>
                                    {precioTotal()} €
                                </h1>
                            </div>
                            <div className='pt-3 flex justify-between items-center'>
                                <div className='text-center flex flex-wrap gap-3'>
                                    <small onClick={() => eliminarProducto()} className=' cursor-pointer py-3 px-5 bg-slate-500 text-slate-50 rounded-full'>Vaciar Carro</small>
                                </div>

                            </div>
                        </>

                    }
                </div>
            </div>



            {/* Formulario checkout */}




            {!cart.length < 1 &&
                <>
                    <div className="isolate bg-white py-20">
                        <div
                            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                            aria-hidden="true">
                            <div
                                className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                            />
                        </div>

                        <div className="relative mx-auto max-w-3xl">
                            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                                <div className=" mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 flex-wrap">
                                    <div className=" sm:max-w-xs ">
                                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                            Finalizar el checkout
                                        </h1>
                                        <p className="mt-4 text-xl text-gray-500">
                                            Rellene los datos a continuacion para terminar con el proceso de compra de  su pedido.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="mt-10">
                                            <div
                                                aria-hidden="true"
                                                className=" lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                                            >
                                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                                    <div className="flex items-center space-x-6 lg:space-x-8">

                                                        <div>
                                                            <form onSubmit={handleSubmit(comprar)} className="mx-auto max-w-xl sm:mt-20 mb-28">
                                                                <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                                                                    <div>
                                                                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                                                            Nombre*
                                                                        </label>
                                                                        <div className="mt-2.5">
                                                                            <input required
                                                                                type="text"
                                                                                id="first-name"
                                                                                autoComplete="given-name"
                                                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                                {...register('nombre')}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                                                            Apellido
                                                                        </label>
                                                                        <div className="mt-2.5">
                                                                            <input
                                                                                type="text"
                                                                                id="last-name"
                                                                                autoComplete="family-name"
                                                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                                {...register('apellido')}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="sm:col-span-2">
                                                                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                                                            Email*
                                                                        </label>
                                                                        <div className="mt-2.5">
                                                                            <input required
                                                                                type="email"
                                                                                id="email"
                                                                                autoComplete="email"
                                                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                                {...register('email')}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="sm:col-span-2">
                                                                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                                                            Teléfono <span className='text-tiny font-normal text-slate-400'>(Opcional)</span>
                                                                        </label>
                                                                        <div className="relative mt-2.5">
                                                                            <div className="absolute inset-y-0 left-0 flex items-center">
                                                                                <label htmlFor="country" className="sr-only">
                                                                                    País
                                                                                </label>
                                                                                <select
                                                                                    id="country"
                                                                                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                                                                    {...register('prefijo')}
                                                                                >
                                                                                    <option>+34</option>
                                                                                    <option>+54</option>
                                                                                    <option>+31</option>
                                                                                </select>
                                                                                <ChevronDownIcon
                                                                                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </div>
                                                                            <input
                                                                                type="tel"
                                                                                id="phone-number"
                                                                                autoComplete="tel"
                                                                                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                                {...register('telefono')}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="sm:col-span-2">
                                                                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                                                            Dirección <span className='text-tiny font-normal text-slate-400'>(Opcional)</span>
                                                                        </label>
                                                                        <div className="mt-2.5">
                                                                            <textarea
                                                                                id="address"
                                                                                rows={2}
                                                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                                {...register('direccion')}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                                                                        <div className="flex h-6 items-center">
                                                                            <Switch
                                                                                checked={agreed}
                                                                                onChange={setAgreed}
                                                                                className={classNames(
                                                                                    agreed ? 'bg-green-600' : 'bg-gray-200',
                                                                                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                                                                )}
                                                                            >
                                                                                <span className="sr-only">Acepto la politica de privacidad.</span>
                                                                                <span
                                                                                    aria-hidden="true"
                                                                                    className={classNames(
                                                                                        agreed ? 'translate-x-3.5' : 'translate-x-0',
                                                                                        'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                                                                    )}
                                                                                />
                                                                            </Switch>
                                                                        </div>
                                                                        <Switch.Label className="text-sm leading-6 text-gray-600">
                                                                            Activando aqui, estarás aceptando nuestra{' '}
                                                                            <span className="font-semibold text-slate-600">
                                                                                politica de privacidad
                                                                            </span>
                                                                            .
                                                                        </Switch.Label>
                                                                    </Switch.Group>
                                                                </div>
                                                                <div className="mt-10">
                                                                    <button
                                                                        type="submit"
                                                                        className="block w-full px-3.5 py-5 text-center text-md font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 cursor-pointer bg-slate-700 rounded-full font-bold"
                                                                    >
                                                                        Checkout
                                                                    </button>
                                                                    {
                                                                        purchaseId === '' ? <p></p> : <p className='pt-10 text-lg leading-8 text-gray-600 mx-auto max-w-2xl text-center'>Tu formulario se ha enviado con el ID: {purchaseId} </p>
                                                                    }
                                                                </div>
                                                            </form>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <Link
                                                to="/productos"
                                                className="inline-block rounded-full border border-transparent bg-slate-400 px-8 py-3 text-center font-medium text-white hover:bg-slate-700"
                                            >
                                                Ver más productos
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                </>}
        </>
    )
}

export default Checkout