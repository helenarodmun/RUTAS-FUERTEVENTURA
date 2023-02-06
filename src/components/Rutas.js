import React from "react";

class Rutas extends React.Component {
  render() {
    return (
      <section class="projects-section bg-light" id="rutas">
        <div class="container px-4 px-lg-5">
          <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div class="col-xl-8 col-lg-7">
              <img
                class="img-fluid mb-3 mb-lg-0"
                src="assets/img/cofete5.jpg"
                alt="..."
              />
            </div>
            <div class="col-xl-4 col-lg-5">
              <div class="featured-text text-center text-lg-left">
                <h4>Sur: Cofete – Barlovento</h4>
                <p class="text-black-50 mb-0">
                  Se puede empezar la caminata desde el pueblo o desde la playa
                  hacia la pequeña isla "el islote" y terminar hacia el norte
                  hasta que los acantilados y el mar se juntan. Impresionantes
                  vistas sobre las empinadas montañas y las impresionantes olas.
                  CORRIENTES FUERTES - ¡NO SALGAS NADANDO! Distancia aproximada:
                  7,7 km, elevación aproximada: 66 m
                </p>
              </div>
            </div>
          </div>
          <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
            <div class="col-lg-6">
              <iframe
                class="alltrails"
                src="https://www.alltrails.com/widget/trail/spain/fuerteventura/volcan-calderon-hondo?u=i"
                width="100%"
                height="400"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                title="AllTrails: Trail Guides and Maps for Hiking, Camping, and Running"
              ></iframe>
            </div>
            <div class="col-lg-6">
              <div class="bg-black text-center h-100 project">
                <div class="d-flex h-100">
                  <div class="project-text w-100 my-auto text-center text-lg-left">
                    <h4 class="text-white">Volcán Calderón Hondo</h4>
                    <p class="mb-0 text-white-50">
                      Cerca del pueblo de Lajares, en el norte de la isla, se
                      encuentra una de las mejores zonas para disfrutar de las
                      espectaculares formaciones rocosas que componen la isla de
                      Fuerteventura, el Volcán Calderón Hondo, con 70 metros de
                      profundidad y más de 50.000 años de historia. A lo largo
                      de 4 kilómetros y medio se encuentran los siete conos
                      volcánicos conocidos como la alineación del Bayuyo.
                      ¡Impresionante!
                    </p>
                    <hr class="d-none d-lg-block mb-0 ms-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row gx-0 justify-content-center">
            <div class="col-lg-6">
              <iframe
                class="alltrails"
                src="https://www.alltrails.com/widget/trail/spain/fuerteventura/presa-de-las-penitas-ermita-de-la-pena?u=m"
                width="100%"
                height="400"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                title="AllTrails: Trail Guides and Maps for Hiking, Camping, and Running"
              ></iframe>
            </div>
            <div class="col-lg-6 order-lg-first">
              <div class="bg-black text-center h-100 project">
                <div class="d-flex h-100">
                  <div class="project-text w-100 my-auto text-center text-lg-right">
                    <h4 class="text-white">
                      Presa de las Peñitas - Ermita de la Peña
                    </h4>
                    <p class="mb-0 text-white-50">
                      Preciosa ruta donde se pueden contemplar unas vistas
                      excelentes junto a una vegetación idílica en medio de un
                      terreno rocoso y arenoso. Es necesario llevar protector
                      solar, mucho agua y calzado de senderismo, ya que no hay
                      prácticamente sombra durante el recorrido y hay partes del
                      sendero algo pedregosas. ¡Merece la pena!
                    </p>
                    <hr class="d-none d-lg-block mb-0 me-0" />
                  </div>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </section>
    );
  }
}
export default Rutas;
