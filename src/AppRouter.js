import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { About, Contact, Home } from "./pages"; //Pages=================

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
