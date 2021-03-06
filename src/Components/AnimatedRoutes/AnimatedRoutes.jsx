import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//Layouts for Pages
import Home from "../../Layouts/Home";
import QtCinderella from "../../Layouts/QtCinderella";
import Maya from "../../Layouts/Maya";
import Stats from "../../Layouts/Stats";
import Contact from "../../Layouts/Contact";

export default function AnimatedRoutes() {
  const location = useLocation();
  // initial={false}
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/qt" element={<QtCinderella />} />
        <Route path="/maya" element={<Maya />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </AnimatePresence>
  );
}
