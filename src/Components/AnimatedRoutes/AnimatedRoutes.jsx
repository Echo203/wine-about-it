import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//Layouts for Pages
import Home from "../../Layouts/Home";
import Qt from "../../Layouts/Qt";
import Maya from "../../Layouts/Maya";
import Stats from "../../Layouts/Stats";
import Contact from "../../Layouts/Contact";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/qt" element={<Qt />} />
        <Route path="/maya" element={<Maya />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
