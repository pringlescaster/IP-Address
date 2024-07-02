import React, { useEffect, createContext, useState } from "react";
import Nav from "./Nav";
import Location from "./Location";

export const DataContext = createContext();

function App() {
  const [address, setAddress] = useState(null);
  const [ipAddress, setIpAddress] = useState("8.8.8.8");  // Default IP Address

  useEffect(() => {
    const getData = async () => {
      try {
        console.log('Fetching data with IP:', ipAddress);
        const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_kpc6DpzA0pHeUCHfmETDS97NSRPHo&ipAddress=${ipAddress}`);
        console.log('Response status:', res.status);
        if (res.status === 403) {
          console.error('Access restricted. Check your API key and credits balance.');
        }
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log('Data fetched:', data);
        setAddress(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    getData();
  }, [ipAddress]);  // Re-fetch data whenever ipAddress changes

  const position = address?.location ? [address.location.lat, address.location.lng] : [0, 0];

  return (
    <DataContext.Provider value={{ address, setAddress, ipAddress, setIpAddress, position }}>
      <div>
        <Nav />
        <Location />
      </div>
    </DataContext.Provider>
  );
}

export default App;
