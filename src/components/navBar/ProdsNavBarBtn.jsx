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
                <DropdownItem textValue="Ropa" color="none" className="hover:bg-slate-200">
                    <Link to='/productos/ropa'>
                        <p>
                            Ropa
                        </p>
                    </Link>
                </DropdownItem>
                <DropdownItem textValue="Complementos" color="none" className="hover:bg-slate-200">
                    <Link to='/productos/complementos'>
                        <p>
                            Complementos
                        </p>
                    </Link>
                </DropdownItem>
                <DropdownItem  textValue="Accesorios" color="none" className="hover:bg-slate-200">
                    <Link to='/productos/accesorios'>
                    <p>
                            Accesorios
                        </p>
                    </Link>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default ProdsNavBarBtn
