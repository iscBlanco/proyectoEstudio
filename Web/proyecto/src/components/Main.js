import React from 'react'
import Artistas from './Artistas'
import Servicios from './Servicios'
import Contacto from './Contacto'
import Header from './Header'

function Main(){
    return(
        <div>
            <Header/>
           <Artistas/>
           <Servicios/>
           <Contacto/>
        </div>
        
    )
}
export default Main;