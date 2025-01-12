import React from 'react'
import Cabecera from '../../Components/Pagina/Header/Cabecera'
import style from './PaginaBase.module.css'

export default function PaginaBase() {
  return (
    <main className={style.container}> 
      <Cabecera></Cabecera>
    </main>
  )
}
