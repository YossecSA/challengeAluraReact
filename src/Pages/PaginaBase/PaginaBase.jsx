import React from 'react'
import Cabecera from '../../Components/Pagina/Header/Cabecera'
import style from './PaginaBase.module.css'
import Footer from '../../Components/Pagina/Footer/Footer'

export default function PaginaBase() {
  return (
    <main className={style.container}> 
      <Cabecera></Cabecera>
      <Footer></Footer>
    </main>
  )
}
