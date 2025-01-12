import React, { useState } from "react";
import LinkCabecera from "../LinkCabecera/LinkCabecera";

export default function Cabecera() {
    const [estado, setEstado] = useState(true);

    const cambiarEstado = (estadoCambio) => {
        setEstado(estadoCambio);
    };

    return (
        <header>
            <img src="./img/Logo.png" />
            <nav>
                <LinkCabecera
                    url={"./"}
                    estado={estado}
                    onClick={() => cambiarEstado(true)}
                >
                    HOME
                </LinkCabecera>

                <LinkCabecera
                    url={"./registro"}
                    estado={estado}
                    onClick={() => cambiarEstado(true)}
                >
                    NUEVO VIDEO
                </LinkCabecera>
            </nav>
        </header>
    );
}
