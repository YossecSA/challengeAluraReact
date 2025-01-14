import React, { useState } from "react";
import InputForm from "../../Formulario/InputForm/InputForm";
import SelectForm from "../../Formulario/SelectForm/SelectForm";
import TextareaForm from "../../Formulario/TextareaForm/TextareaForm";
import style from "./FormSubirVideo.module.css";
import BotonForm from "../../Formulario/BotonesForm/BotonForm";
import { registro } from "../../../api/api";

export default function FormSubirVideo() {
    const initialFormData = {
        titulo: "",
        categoria: "",
        imagen: "",
        video: "",
        descripcion: "",
    };

    const initialErrors = {
        titulo: { error: false, message: "El título es obligatorio" },
        categoria: { error: false, message: "Seleccione una categoría" },
        imagen: {
            error: false,
            message: "El enlace de la imagen es obligatorio",
        },
        video: { error: false, message: "El enlace del video es obligatorio" },
        descripcion: {
            error: false,
            message: "La descripción del video es obligatoria",
        },
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState(initialErrors);

    // Manejador de cambios en los campos
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Limpiar el error al escribir en el campo
        if (value.trim() !== "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: { ...prevErrors[name], error: false },
            }));
        }
    };

    // Validar campos vacíos
    const validateForm = () => {
        let hasError = false;
        const nuevosErrores = Object.keys(formData).reduce((acc, key) => {
            if (formData[key].trim() === "") {
                acc[key] = {
                    error: true,
                    message: initialErrors[key].message,
                };
                hasError = true;
            } else {
                acc[key] = { error: false, message: "" };
            }
            return acc;
        }, {});

        setErrors(nuevosErrores);
        return !hasError;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const respuesta = registro("/videos", formData);
                alert("Video registrado exitosamente:", respuesta);
                handleClear();
            } catch (error) {
                alert("Hubo un error al registrar el video:", error);
            }
        } else {
            console.log("Hay errores en el formulario.");
        }
    };

    const handleClear = () => {
        setFormData(initialFormData);
        setErrors(initialErrors);
    };

    return (
        <form className={style.container} onSubmit={handleSubmit}>
            <div className={style.row}>
                <InputForm
                    labelChild="Título"
                    placeholder="Ingrese el título"
                    type="text"
                    name="titulo"
                    value={formData.titulo}
                    onChange={handleChange}
                    estado={errors.titulo.error}
                    mensajeError={errors.titulo.message}
                />
                <SelectForm
                    name="categoria"
                    labelChild="Categoría"
                    value={formData.categoria}
                    onChange={handleChange}
                    estado={errors.categoria.error}
                    mensajeError={errors.categoria.message}
                ></SelectForm>
            </div>
            <div className={style.row}>
                <InputForm
                    labelChild="Imagen"
                    placeholder="Ingrese el enlace de la imagen"
                    type="text"
                    name="imagen"
                    value={formData.imagen}
                    onChange={handleChange}
                    estado={errors.imagen.error}
                    mensajeError={errors.imagen.message}
                />
                <InputForm
                    labelChild="Video"
                    placeholder="Ingrese el enlace del video"
                    type="text"
                    name="video"
                    value={formData.video}
                    onChange={handleChange}
                    estado={errors.video.error}
                    mensajeError={errors.video.message}
                />
            </div>
            <div>
                <TextareaForm
                    name="descripcion"
                    labelChild="Descripción"
                    placeholder="¿De qué se trata este vídeo?"
                    value={formData.descripcion}
                    onChange={handleChange}
                    estado={errors.descripcion.error}
                    mensajeError={errors.descripcion.message}
                />
            </div>
            <div className={style.containerBoton}>
                <BotonForm type="submit">Guardar</BotonForm>
                <BotonForm type="clear" onClick={handleClear}>
                    Limpiar
                </BotonForm>
            </div>
        </form>
    );
}
