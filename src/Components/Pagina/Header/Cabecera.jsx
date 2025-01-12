import React, { useState } from "react";
import LinkCabecera from "../LinkCabecera/LinkCabecera";
import sytle from "./header.module.css"

export default function Cabecera() {
    const [estado, setEstado] = useState(true);

    const cambiarEstado = (estadoCambio) => {
        setEstado(estadoCambio);
    };

    return (
        <header className={sytle.header}>
            <img src="./img/Logo.png" className={sytle.header_logo}/>
            <nav className={sytle.header_nav}>
                <LinkCabecera
                    url={"./"}
                    estado={estado}
                    onClick={() => cambiarEstado(true)}
                >
                    HOME
                </LinkCabecera>

                <LinkCabecera
                    url={"./registro"}
                    estado={!estado}
                    onClick={() => cambiarEstado(false)}
                >
                    NUEVO VIDEO
                </LinkCabecera>
            </nav>
        </header>
    );
}
