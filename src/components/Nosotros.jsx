import { Link } from 'react-router-dom'
import img1 from '../assets/img/accesorios/01.webp'
import img2 from '../assets/img/accesorios/02.webp'
import img3 from '../assets/img/complementos/01.webp'
import img4 from '../assets/img/complementos/03.webp'
import img5 from '../assets/img/complementos/05.webp'
import img6 from '../assets/img/ropa/04.webp'
import img7 from '../assets/img/ropa/05.webp'


const Nosotros = () => {
    return (
        <div className="isolate bg-white py-24 h-screen grid items-center">
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

            <div className=" h-screen overflow-hidden">
                <div className="pb-80 sm:pb-40 lg:pb-48 ">
                    <div className="flex flex-col  md:flex-row justify-center items-center  px-4 sm:px-6 lg:px-8 ">
                        <div className="mb-20 md:max-w-sm lg:max-w-lg">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                                Summer styles are finally here
                            </h1>
                            <p className="mt-4 text-xl text-gray-500 pb-10">
                                This year, our new summer collection will shelter you from the harsh elements of a world that doesn`t care
                                if you live or die.
                            </p>
                            <Link
                                to="/productos"
                                className="inline-block rounded-full border border-transparent bg-slate-600 px-8 py-3 text-center font-medium text-white hover:bg-slate-700"
                            >
                                Shop Collection
                            </Link>
                        </div>
                        <div className=''>
                            <div>

                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none "
                                >
                                    <div className="">
                                        <div className="flex items-center space-x-4 lg:space-x-8">
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44  rounded-lg ">
                                                    <img
                                                        src={img1}
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg ">
                                                    <img
                                                        src={img2}
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src={img3}
                                                        alt=""
                                                        className="h-full w-full object-cover object-bottom"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src={img4}
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src={img5}
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src={img6}
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src={img7}
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>


    )
}

export default Nosotros