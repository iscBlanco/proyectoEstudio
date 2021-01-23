import React from 'react'

function Servicios(){
    return(
        <div>
            <div class="services">
                <h2>Servicios</h2>
                <div class="service grid">

                    <a href="#">
                        <img src="assets/servicios/delineado.jpg" alt="delineado"></img>
                        <h3>delineado</h3>
                    </a>
                    <a href="#">
                        <img src="assets/servicios/laser.jpg" alt="laser"></img>
                        <h3>laser eliminacion de tatuajes</h3>
                    </a>
                    <a href="#">
                        <img src="assets/servicios/piercing.jpg" alt="piercings"></img>
                        <h3>joyeria piercings</h3>
                    </a>
                    <a href="#">
                        <img src="assets/servicios/smoke.jpg" alt="smoke shop"></img>
                        <h3>smoke shop</h3>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Servicios;