import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import CartWidget from './CartWidget'
import MiLogo from './MiLogo';
import ProdsNavBarBtn from './ProdsNavBarBtn';
import { Link } from 'react-router-dom';



const NavBar = () =>  {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Nosotros",
        "Ropa",
        "Accesorios",
        "Complementos",
        "Contactos",
        
    ];

    return (
    
        <Navbar onMenuOpenChange={setIsMenuOpen} className='bg-slate-900 h-24 '>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden text-white font-bold"
                />
                <NavbarBrand>                    
                        <MiLogo/>                    
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4 text-slate-400 cursor-pointer" justify="center">
                <NavbarItem>
                <Link to="/nosotros">
                        Nosotros
                    </Link>
                </NavbarItem>
                <NavbarItem>
                        <ProdsNavBarBtn />
                </NavbarItem>
                <NavbarItem>
                    <Link to="/productos">
                        Contactos
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className=" lg:flex text-white	">
                    <Link to='/carrito'>
                        <CartWidget />
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className='mt-8'>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`} >
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                            className="w-full"
                            to={`/${item}`}
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