import React from 'react'
import delineado from './assets/servicios/delineado.jpg'
import laser from './assets/servicios/laser.jpg'
import piercing from './assets/servicios/piercing.jpg'
import smoke from './assets/servicios/smoke.jpg'

function Servicios(){
    return(
        <div>
            <div class="services">
                <h2>Servicios</h2>
                <div class="service grid">

                    <a href="#">
                        <img src={delineado} alt="delineado"></img>
                        <h3>delineado</h3>
                    </a>
                    <a href="#">
                        <img src={laser} alt="laser"></img>
                        <h3>laser eliminacion de tatuajes</h3>
                    </a>
                    <a href="#">
                        <img src={piercing} alt="piercings"></img>
                        <h3>joyeria piercings</h3>
                    </a>
                    <a href="#">
                        <img src={smoke} alt="smoke shop"></img>
                        <h3>smoke shop</h3>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Servicios;