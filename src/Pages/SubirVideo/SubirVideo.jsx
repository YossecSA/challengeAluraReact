import React, { useState } from "react";
import sytle from "./SubirVideo.module.css";
import InputForm from "../../Components/Formulario/InputForm/InputForm";
import SelectForm from "../../Components/Formulario/SelectForm/SelectForm";
import TextareaForm from "../../Components/Formulario/TextareaForm/TextareaForm";

export default function SubirVideo() {
    const [value, setValue] = useState(""); // Estado del select
    const [error, setError] = useState(false); // Estado para el error
    const handleChange = (e) => {
        setValue(e.target.value);

        // Validar si el usuario seleccionó una opción válida
        if (e.target.value === "") {
            setError(true);
        } else {
            setError(false);
        }
    };

    const options = [
        { value: "opcion1", label: "Opción 1" },
        { value: "opcion2", label: "Opción 2" },
        { value: "opcion3", label: "Opción 3" },
    ];
    return (
        <div className={sytle.container}>
            <div className={sytle.headerContainer}>
                <h2 className={sytle.title}>NUEVO VIDEO</h2>
                <p className={sytle.description}>
                    Complete el formulario para crear una nueva tarjeta de video
                </p>
            </div>
            <div className={sytle.articleContainer}>
                <span className={sytle.articleTitle}>Crear Tarjeta</span>
            </div>
            <div>
                <InputForm
                    labelChild="Titulo"
                    placeholder="ingrese el título"
                    type="text"
                    estado={false}
                ></InputForm>
                <SelectForm
                    name="categoria"
                    labelChild="Categoría"
                    value={value}
                    options={options}
                    estado={error}
                    onChange={handleChange}
                ></SelectForm>
                <TextareaForm 
                    name="descripcion"
                    labelChild="Descripción"
                    value={value}
                    placeholder="Escribe aquí tu descripción..."
                    estado={error}
                />
            </div>
        </div>
    );
}
