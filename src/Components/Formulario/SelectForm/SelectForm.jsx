import React from "react";
import style from "./SelectForm.module.css";

export default function SelectForm({
    name,
    labelChild,
    value,
    options,
    onChange,
    estado, // Indica si hay error (true para error, false para correcto)
}) {
    return (
        <div className={style.inputContainer}>
            <label
                htmlFor={name}
                className={`${style.label} ${estado ? style.labelError : ""}`}
            >
                {labelChild}
            </label>
            <select
                id={name}
                name={name}
                value={value}
                className={`${style.input} ${estado ? style.inputError : ""}`}
                onChange={onChange}
            >
                <option value="" disabled>
                    {estado ? "Seleccione una opción válida" : "Seleccione una categoría"}
                </option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
