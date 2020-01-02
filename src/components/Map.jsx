import React, { useState, useEffect } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import Geocode from 'react-geocode';

// grab addresses of donors and convert to lat/lng via react-geocode in order to create Markers
// const Geocodes = () => {
//   fetch('/getAddresses')
//   .then(res => res.json)
//   .then(data => {
//     const coordinates = [];
//     data.map(element => {
//       Geocode.fromAddress(`${element}`).then(
//         response => {
//           const { lat, lng } = response.results[0].geometry.location;
//           coordinates.push({
//             lat: lat,
//             lng: lng
//           })
//         },
//         error => {
//           console.error(error);
//         }
//       );
//     })
//   })
//   .then(data => {
//     data.map((element,i) => {
//       <Marker key={i} position={{ lat: element[i].lat, lng: element[i].lng }} />
//     })
//   })
//   .catch(err => console.log(err))
// }

// TEST ONLY; pending fetch from back-end
// let data = ['1600 main street, venice beanch, ca', '1155 s grand ave, los angeles, ca']
// let coordinates = [];
// data.map(element => {
//   Geocode.fromAddress(`${element}`).then(
//   response => {
//     const { lat, lng } = response.results[0].geometry.location;
//     coordinates.push({
//       lat: lat,
//       lng: lng
//     })
//   },
//   error => {
//     console.error(error);
//   }
//   );
// })

const Map = () => {

  //default to venice beach, ca
  const [currLat, setLat] = useState(33.875220);
  const [currLng, setLng] = useState(-118.409370);

  // set up Google API to use react-geocode
  Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_KEY}`);

  // get geolocation of user
  navigator.geolocation.getCurrentPosition(position => {
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
  });

  // create GoogleMap with markers
  const GeoMap = () => {
    // console.log('line 69',currLng)
    // console.log('line 70',currLat)
    return(
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{lat: currLat, lng: currLng}}
      >
        <Marker position={{lat: currLat, lng: currLng}}/>
      </GoogleMap>
    )
  }

  // wrap GoogleMap to embed javascript
  const WrappedMap = withScriptjs(withGoogleMap(GeoMap));

  return(
    <div id="map">
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`}
        loadingElement={<div className="map-elements" />}
        containerElement={<div className="map-elements" />}
        mapElement={<div className="map-elements" />}
      />
    </div>
  )
}

export default Map;