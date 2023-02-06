import React from "react";

class About extends React.Component {
  render() {
    return (
      <section class="about-section text-center" id="about">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-lg-8">
              <h2 class="text-white mb-4">¿Qué es el Senderismo?</h2>
              <p class="text-white-50">
                ¿Qué es y porqué nos gusta el Senderismo?<br/>                
                 El senderismo es una actividad deportiva que se desarrolla en el
                medio natural. Consiste en caminar por senderos, caminos,
                senderos, etc … de bosques, hayedos, montañas, con el fin de
                descubrir el patrimonio natural, contemplar vistas y
                panorámicas. Al tiempo que disfrutar de la práctica del
                ejercicio físico en la Naturaleza. El senderismo es una
                actividad no competitiva, esto quiere decir que su finalidad no
                es la de competir contra el tiempo o contra otros participantes.
                Al contrario, es un actividad perfecto para tomarse con calma,
                disfrutar en compañía, compartir grandes momentos y
                experiencias, y desconectar de la rutina.<br/>
                <a href="https://www.senderismo.net/destino/canarias/Actividades">
                  Únete a la comunidad de SENDERISMO.net. 
                </a>
              </p>
              
            </div>
          </div>
          <img class="img-fluid" src="assets/img/ajuy.png" alt="..." />
        </div>
      </section>
    );
  }
}
export default About;
