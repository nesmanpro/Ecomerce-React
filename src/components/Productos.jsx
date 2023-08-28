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
                <DropdownItem key="new">Branding</DropdownItem>
                <DropdownItem key="copy">Photography</DropdownItem>
                <DropdownItem key="edit">Video editing</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default Productos
