import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Link } from "react-router-dom";

const ProdsNavBarBtn = () => {



    return (
        <Dropdown>
            <DropdownTrigger>
                <Link to='/productos'> 
                    Productos
                </Link>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">    
                <DropdownItem textValue="Ropa">
                    Ropa
                </DropdownItem>
                <DropdownItem  textValue="Complementos">
                    Complementos
                </DropdownItem>
                <DropdownItem  textValue="Accesorios">
                    Accesorios
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default ProdsNavBarBtn
