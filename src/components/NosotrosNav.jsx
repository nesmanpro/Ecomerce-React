import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

const Nosotros = () => {
    return (
        <Dropdown>
            <DropdownTrigger>
                <a href="#"
                    className="text-white"
                >
                    Nosotros
                </a>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="copy">Historia</DropdownItem>
                <DropdownItem key="new">Quienes Somos</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default Nosotros
