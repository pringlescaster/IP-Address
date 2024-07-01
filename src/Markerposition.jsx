import React, { useEffect, useContext } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import Icon from "./Icon";
import { DataContext } from './App';

function Markerposition() {
  const { position } = useContext(DataContext);
  const map = useMap();

  useEffect(() => {
    if (position && position.length === 2) {
      map.flyTo(position, 13, {
        animate: true
      });
    }
  }, [map, position]);

  return (
    <Marker icon={Icon} position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
}

export default Markerposition;
