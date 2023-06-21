import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

const ChoroplethMap = () => {
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    // Load GeoJSON data
    fetch('/path/to/your/geojson/data.json')
      .then((response) => response.json())
      .then((data) => {
        setGeojsonData(data);
      })
      .catch((error) => {
        console.error('Error loading GeoJSON data:', error);
      });
  }, []);

  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {geojsonData && (
        <GeoJSON
          data={geojsonData}
          style={(feature) => ({
            fillColor: getColor(feature.properties.value),
            weight: 1,
            color: 'white',
            fillOpacity: 0.7,
          })}
        />
      )}
    </MapContainer>
  );
};

export default ChoroplethMap;

