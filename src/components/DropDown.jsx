import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

const DropDown = () => {
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

export default DropDown
