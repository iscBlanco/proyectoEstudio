import React from 'react'
import blanco from './assets/artistas/blanco.jpg'
import grillo from './assets/artistas/grillo.jpg'
import mara from './assets/artistas/mara.jpg'
import sam from './assets/artistas/sam.jpg'

function Artistas(){
    return(
        <div>
            <div class="artistas">

            <div class="artista grid">
                <h2>Aritstas</h2>
                <a href="#">
                    <img src={blanco} alt="tatuador Blanco"></img>
                    <h3>Blanco</h3>
                </a>
                <a href="#">
                    <img src={grillo} alt="tatuador Grillo"></img>
                    <h3>Grillo</h3>
                </a>
                <a href="#">
                    <img src={sam} alt="perforadora Sam"></img>
                    <h3>Sam</h3>
                </a>
                <a href="#">
                    <img src={mara} alt="perforadora Mara"></img>
                    <h3>Mara</h3>
                </a>
            </div>
            </div>
        </div>
    )
}

export default Artistas;