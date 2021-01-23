import React from 'react'

function Contacto(){
    return(
        <div>
            <section class="contact-info">
                <h2>Contacto</h2>
                <div class="contact grid">
                    <address>
                        <a href="mailto:blancotattoos@hotmail.com">escribenos un email</a>
                        <br></br>
                        <a href="tel:+4939313209">(493)931-3209</a>
                    </address>
                    <address>
                        <p>ubicacion por google maps</p>
                        <p>direccion</p>
                    </address>
                    <address class="time">
                        <p>
                            horarios
                        </p>
                    </address>
                </div>
            </section>
        </div>
    )
}

export default Contacto;