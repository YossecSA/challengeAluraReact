import React from "react";
import sytle from "./SubirVideo.module.css";

export default function SubirVideo() {
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
            <div></div>
        </div>
    );
}
