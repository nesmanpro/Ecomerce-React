import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Link } from "react-router-dom";

const ProdsNavBarBtn = () => {



    return (
        <Dropdown>
            <DropdownTrigger>
                <a> 
                    Categorias
                </a>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" >  
                <DropdownItem as={Link} to='/productos/ropa'  color="none" className="hover:bg-slate-200">
                            Ropa  
                </DropdownItem>
                <DropdownItem as={Link} to='/productos/complementos'  color="none" className="hover:bg-slate-200">
                            Complementos
                </DropdownItem>
                <DropdownItem as={Link} to='/productos/accesorios'  color="none" className="hover:bg-slate-200">
                            Accesorios
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default ProdsNavBarBtn
