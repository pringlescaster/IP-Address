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
        const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ipAddress}`);
        const data = await res.json();
        setAddress(data);
      } catch (error) {
        console.trace(error);
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
