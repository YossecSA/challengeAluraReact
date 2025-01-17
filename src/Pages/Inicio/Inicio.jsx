import React, { useState } from 'react';
import ModalEditarVideo from '../../Components/Modal/EditarVideo/ModalEditarVideo'
import Banner from '../../Components/Pagina/Banner/Banner';
import ListCategoria from '../../Components/Pagina/ListCategoria/ListCategoria';

export default function Inicio() {
  const [modalVisible, setModalVisible] = useState(false);

  const videoData = {
    id: "a90f", // ID del video que se está editando
    titulo: "Video de prueba",
    categoria: 2,
    imagen: "https://link-a-imagen.com",
    video: "https://link-a-video.com",
    descripcion: "Descripción del video"
  };


  const abrirModal = () => {
    setModalVisible(true);
  };

  // Función para cerrar el modal
  const cerrarModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <Banner></Banner>
      <h2>Inicio</h2>
      <ListCategoria  />
      <button onClick={abrirModal}>Editar</button>
      <ModalEditarVideo
        isVisible={modalVisible}
        onClose={cerrarModal}
        dataToEdit={videoData} 
      />
    </div>
  )
}
