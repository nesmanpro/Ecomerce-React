import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import CartWidget from './CartWidget'
import MiLogo from './MiLogo';



const NavBar = () =>  {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Nosotros",
        "Productos",
        "Contactos",
        'Carrito',
    ];

    return (
    
        <Navbar onMenuOpenChange={setIsMenuOpen} className='bg-slate-900 h-24'>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden text-white font-bold"
                />
                <NavbarBrand>                    
                        <MiLogo/>                    
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4 " justify="center">
                <NavbarItem>
                    <Link className="text-white	" href="#">
                        Nosotros
                    </Link>
                </NavbarItem>
                <NavbarItem className='font-bold'>
                    <Link className="text-slate-400" href="#" aria-current="page">
                        Productos
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white	" href="#">
                        Contactos
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className=" lg:flex text-white	">
                    <CartWidget />
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "foreground" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

export default NavBar