import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./js/component/scrollToTop";

import { Home } from "./js/views/home.js";
import { People } from "./js/views/people.jsx";
import { SpecificPerson } from "./js/views/specificPerson.jsx";
import { Planets } from "./js/views/planets.jsx";
import { SpecificPlanet } from "./js/views/specificPlanet.jsx";
import { Vehicles } from "./js/views/vehicles.jsx";
import { SpecificVehicle } from "./js/views/specificVehicle.jsx";
import { Starships } from "./js/views/starships.jsx";
import { SpecificStarship } from "./js/views/specificStarship.jsx";
import injectContext from "./js/store/appContext";

import { Navbar } from "./js/component/navbar";

const Layout = () => {

  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<People />} />
            <Route path="/people/:id" element={<SpecificPerson />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/planets/:id" element={<SpecificPlanet />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/vehicles/:id" element={<SpecificVehicle />} />
            <Route path="/starships" element={<Starships />} />
            <Route path="/starships/:id" element={<SpecificStarship />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
