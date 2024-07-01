import React, { useContext } from "react";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';

import { DataContext } from "./App";
import Markerposition from "./Markerposition";

function Location() {
  const { address, position } = useContext(DataContext);

  const location = address?.location;
  const lat = location?.lat;
  const lng = location?.lng;

  if (!address || !location || typeof lat !== 'number' || typeof lng !== 'number') {
    return <div className="text-white justify-center font-rubik font-semibold">Loading...</div>;
  }

  return (
    <div className="">
      <div className="px-4 md:px-8">
        <article className="grid shadow-sm rounded-lg justify-around text-center md:text-left gap-y-4 max-w-xl mx-auto bg-white m px-4 py-4 md:flex" style={{ zIndex: 1000 }}>
          <div className="grid gap-y-1 px-4 md:border-slate-400 md:border-r-[1.4px]">
            <h5 className="text-[10px] text-gray-500 font-medium font-rubik">IP ADDRESS</h5>
            <h1 className="text-[#111111] font-medium font-rubik text-[16px]">{address.ip}</h1>
          </div>
          <div className="grid gap-y-1 px-4 md:border-slate-400 md:border-r-[1.4px]">
            <h5 className="text-[10px] text-gray-500 font-medium font-rubik">LOCATION</h5>
            <h1 className="text-[#111111] font-medium font-rubik text-[16px]">{`${location.city}, ${location.region}`}</h1>
          </div>
          <div className="grid gap-y-1 px-4 md:border-slate-400 md:border-r-[1.4px]">
            <h5 className="text-[10px] text-gray-500 font-medium font-rubik">TIMEZONE</h5>
            <h1 className="text-[#111111] font-medium font-rubik text-[16px]">{location.timezone}</h1>
          </div>
          <div className="grid gap-y-1 px-4 md:border-slate-400">
            <h5 className="text-[10px] text-gray-500 font-medium font-rubik">ISP</h5>
            <h1 className="text-[#111111] font-medium font-rubik text-[16px]">{address.isp}</h1>
          </div>
        </article>
      </div>
      <div className="relative" style={{ zIndex: 10000 }}>
        <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{ height: '100vh', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Markerposition />
        </MapContainer>
      </div>
    </div>
  );
}

export default Location;
