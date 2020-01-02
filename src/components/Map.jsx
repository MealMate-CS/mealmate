import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import Geocode from 'react-geocode';

const googleAPI = "AIzaSyAXSvD9_IUVXmkaj943_LTKjXxrlWXFTHY"

// set up Google API to use react-geocode
Geocode.setApiKey(`${googleAPI}}`)

// set default location to venice beach, ca
let currLat = 33.875220;
let currLng = -118.409370;

// grab geolocation of user device and change location if available
navigator.geolocation.getCurrentPosition(position => {
  if (position) {
    currLat = position.coords.latitude;
    currLng = position.coords.longitude;
  }
})

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
let data = ['1600 main street, venice beanch, ca', '1155 s grand ave, los angeles, ca']
let coordinates = [];
data.map(element => {
  Geocode.fromAddress(`${element}`).then(
  response => {
    const { lat, lng } = response.results[0].geometry.location;
    coordinates.push({
      lat: lat,
      lng: lng
    })
  },
  error => {
    console.error(error);
  }
  );
})
// console.log(coordinates)

// create GoogleMap with markers
const GeoMap = () => {
  return(
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{lat: currLat, lng: currLng}}
    >
      <Marker position={{lat: 33.875220, lng: -118.409370}}/>
    </GoogleMap>
  )
}

// wrap GoogleMap to embed javascript
const WrappedMap = withScriptjs(withGoogleMap(GeoMap));

const Map = () => {
  return(
    <div id="map">
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          googleAPI
        }`}
        loadingElement={<div className="map-elements" />}
        containerElement={<div className="map-elements" />}
        mapElement={<div className="map-elements" />}
      />
    </div>
  )
}

export default Map;