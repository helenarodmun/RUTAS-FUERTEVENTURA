import React from "react";
import { useState } from "react";
import Map from "./components/Mapa";
import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import About from "./components/About";
import Rutas from "./components/Rutas";
import SingUp from "./components/SingUp";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import ReactPlayer from "react-player";

function App() {

  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const geolocationAPI = navigator.geolocation;

  if (!navigator.geolocation) {
    alert("Tu navegador no tiene opción de Geolocalization");
    throw new Error("Tu navegador no tiene opción de Geolocalization");
  } else {
    
    geolocationAPI.getCurrentPosition((position) => {
      const { coords } = position;
      setLat(coords.latitude);
      setLong(coords.longitude);
    });
  }
  const state = {
    center: { lat:  lat, lng: long },
    zoom: 18,
  };
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <About/>
    <div id="mapa" class=" mapa-section container px-1 px-lg-5">
      <h2 class="text-white mb-4">Your coordinates are: <span class="text-white-50">{[lat, long]}</span></h2>
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
          zoom={state.zoom}
          center={state.center}
          
          markers={{lat:lat, lng:long}}
          />                  
      </LoadScript>
      </div>
      </div>
      </div>
    </div>
    <Rutas/>
    <div className="video row">
    <ReactPlayer
    url='https://www.youtube.com/watch?v=_LqAraHvOVU&ab_channel=Fran-c4'
    width='50%'
    height='400px'
    controls
    className='react-player'
    />
    <ReactPlayer
    url='https://www.youtube.com/watch?v=-wjxMFpfyqI&ab_channel=V%C3%ADveloCaminantesdeAguere'
    width='50%'
    height='400px'
    controls
    className='react-player'
    />
     <ReactPlayer
    url='https://www.youtube.com/watch?v=p4_jZo1p2Io&ab_channel=Senderosdepiedrayagua'
    width='50%'
    height='400px'
    controls
    className='react-player'
    />
     <ReactPlayer
    url='https://www.youtube.com/watch?v=PiJKa9qcacM&ab_channel=LRMVideos'
    width='50%'
    height='400px'
    controls
    className='react-player'
    />
    </div>    
   <SingUp/>
    <Contact/>
      </div>  
  );
}
export default App;
