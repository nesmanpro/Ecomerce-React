import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import CartWidget from '../carrito/CartWidget'
import MiLogo from './MiLogo';
import ProdsNavBarBtn from './ProdsNavBarBtn';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import HeadlessSlideOver from './HeadlessSlideOver'




const NavBar = () =>  {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [open, setOpen] = useState(false);

    const menuItems = [
        "Nosotros",
        "Productos",
        "Ropa",
        "Accesorios",
        "Complementos",
        "Contacto",
    
    ];

    return (
    
        <Navbar onMenuOpenChange={setIsMenuOpen} className='bg-slate-900 h-24 '>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden text-white font-bold"
                />
                <NavbarBrand >                    
                        <MiLogo/>                    
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4 text-slate-400 cursor-pointer" justify="center">
                <NavbarItem as={Link} to="/nosotros">
                
                        Nosotros
                    
                </NavbarItem>
                <NavbarItem as={Link} to="/productos">
                    
                        Productos
                    
                </NavbarItem>
                <NavbarItem>
                        <ProdsNavBarBtn />
                </NavbarItem>
                <NavbarItem as={Link} to="/contacto">
                    
                        Contacto
                    
                </NavbarItem>
                
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className=" lg:flex text-white	cursor-pointer">
                        <div onClick={() => setOpen (true)}>
                        <CartWidget/>
                        </div>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className='mt-8'>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`} >
                        <Link
                            className="w-full"
                            to={`/productos/${item}`}
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
            <HeadlessSlideOver 
                open={open}
                setOpen={setOpen}
                title='Cart Details'
            />
        </Navbar>
    );
}

export default NavBar