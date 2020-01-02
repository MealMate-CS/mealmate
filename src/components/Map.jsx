import React, { useState, useEffect } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import Geocode from 'react-geocode';

const Map = () => {

  const googleAPI = 'AIzaSyAXSvD9_IUVXmkaj943_LTKjXxrlWXFTHY'

  // default lat/lng to venice beach, ca
  const [currLat, setLat] = useState(33.875220);
  const [currLng, setLng] = useState(-118.409370);
  const [donorLatLng, setDonorLatLng] = useState([]);

  // get donor addresses from table to display as markers on map
  useEffect(() => {
    fetch('/consumer/donorAddress')
    .then(res => res.json())
    .then(data => {
      const coordinates = [];
      data.map(element => {
        Geocode.fromAddress(element.address).then(
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
      setDonorLatLng(coordinates);
    })
    .catch(err => console.log(err))
  }, [])

  // set up Google API to use react-geocode
  Geocode.setApiKey(googleAPI);

  // get geolocation of user
  navigator.geolocation.getCurrentPosition(position => {
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
  });

  // create GoogleMap with markers
  const GeoMap = () => {

    const list = [];
    donorLatLng.forEach((obj, i) => {
      list.push(<Marker key={i} position={{lat: obj.lat, lng: obj.lng}} />)
    })

    return(
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{lat: currLat, lng: currLng}}
      >
        {list}
      </GoogleMap>
    )
  }

  // wrap GoogleMap to embed javascript
  const WrappedMap = withScriptjs(withGoogleMap(GeoMap));

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