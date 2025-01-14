import axios from "axios";

export const api = axios.create({ baseURL: "http://localhost:3001" });

export const buscar = async (url, setDado) => {
    const respuesta = await api.get(url);
    setDado(respuesta.data);
};

export const registro = async (url, datos) => {
    try {
        const respuesta = await api.post(url, datos);

        if (respuesta.status === 200) {
            console.log("Respuesta del servidor:", respuesta.data);
            return { mensaje: "Video registrado correctamente" }; 
        } else {
            return { mensaje: "Hubo un problema al registrar el video" };
        }
        
    } catch (error) {
        console.error("Error al enviar los datos:", error);
        return { mensaje: "Error al registrar el video" };
    }
};
