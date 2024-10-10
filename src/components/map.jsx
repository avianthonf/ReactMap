import React, { useRef, useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './map.css';


export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const mapusa = { lat: 15.5898214,  lng: 73.8009416 };
  const zoom = 14;
  maptilersdk.config.apiKey = 'kw6yqq1FEvT2xwAoRFkA';

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [mapusa.lng, mapusa.lat],
      zoom: zoom
    });

  }, [mapusa.lng, mapusa.lat, zoom]);


  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}