import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./COMPONENTS/Header";
import Footer from "./COMPONENTS/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
