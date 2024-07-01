import React, { useState, useContext } from "react";
import arrow from "./images/icon-arrow.svg";
import background from "./images/pattern-bg-desktop.png";
import { DataContext } from "./App";

function Nav() {
  const { setIpAddress } = useContext(DataContext);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIpAddress(inputValue);
  };

  return (
    <section>
      <div className="absolute -z-10">
        <img
          src={background}
          alt=""
          className="w-full h-96 md:h-60 object-cover"
        />
      </div>
      <article className="py-8">
        <h1 className="text-2xl text-center text-white font-bold mb-8">
          IP Address Tracker
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center max-w-xl mx-auto px-6"
        >
          <input
            className="py-2 px-4 rounded-l-lg w-full"
            type="text"
            name="ipaddress"
            id="ipaddress"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search for any IP Address or domain"
          />
          <button
            className="bg-black py-4 px-4 hover:opacity-60 rounded-r-lg"
            type="submit"
          >
            <img src={arrow} alt="arrow" />
          </button>
        </form>
      </article>
    </section>
  );
}

export default Nav;
