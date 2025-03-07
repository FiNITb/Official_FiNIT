import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ lat, lon }) => {
  useEffect(() => {
    // Set default icon paths explicitly
    L.Icon.Default.mergeOptions({
      iconUrl: '/leaflet/marker-icon.png', // Adjust path as per the public folder
      shadowUrl: '/leaflet/marker-shadow.png',
    });

    // Create a Leaflet map instance
    const map = L.map('map', {
      center: [lat, lon],
      zoom: 16,
    });

    // Use OpenStreetMap's tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Add a marker at the specified lat/lon
    L.marker([lat, lon]).addTo(map).bindPopup('Selected Location').openPopup();

    // Cleanup the map when the component unmounts
    return () => {
      map.remove();
    };
  }, [lat, lon]);

  return (
    <div
      id="map"
      style={{ width: '100%', height: '100%', minHeight: '300px', borderRadius: '10px', zIndex: 0 }}
    />
  );
};

export default MapComponent;
