import React, { Component, useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";


class Mapa extends Component {
  
  constructor(props) {
    super(props);
    const { lat, setLat, long, setLong } = props;
  }
  //como pasar las coordenadas del navegador?
  state = {
    center: { lat:  28.4993424, lng: -13.8599051 },
    zoom: 13,
  };
 
  render() {
    return (
      <div id="mapa" class=" mapa container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-10">
        
      <LoadScript googleMapsApiKey="AIzaSyBFInGS5t1ouGAdGmAEeoar0eO3l_DUNEs">
        <GoogleMap
          id="map"
          mapContainerStyle={{
            height: "400px",
            width: "100%",
          }}
          zoom={this.state.zoom}
          center={this.state.center}
        />
        <Marker
        name={'Current location'}
        />
          
        
      </LoadScript>
      </div>
      </div>
      </div>
    );
  }
}

export default Mapa;
