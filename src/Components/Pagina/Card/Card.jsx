import React from "react";
import "./Card.css";

export default function Card(props) {
    const { imagen, id } = props.datos;
    const { color, eliminarVideo } = props;

    return (
        <article className="card" style={{ border: `5px solid ${color}` }}>
            <div
                className="card__video"
                style={{
                    borderBottom: `5px solid ${color}`,
                    boxShadow: `inset 0 0 30px ${color}`,
                }}
            >
                <img src={imagen} alt="imagen del video" />
            </div>
            <div className="card__info">
                <div onClick={() => eliminarVideo(id)} className="info__button">
                    <img src="./img/icon_borrar.png" alt="icon de borrar" />
                    <span>BORRAR</span>
                </div>
                <div className="info__button">
                    <img src="./img/icon_editar.png" alt="icon de editar" />
                    <span>EDITAR</span>
                </div>
            </div>
        </article>
    );
}
