import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

const Productos = () => {
    return (
        <Dropdown>
            <DropdownTrigger>
                <a href="#"
                    className="text-slate-400"
                >
                    Productos
                </a>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">Ropa</DropdownItem>
                <DropdownItem key="copy">Complementos</DropdownItem>
                <DropdownItem key="edit">Accesorios</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default Productos
