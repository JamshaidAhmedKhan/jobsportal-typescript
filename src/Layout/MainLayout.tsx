import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <div className="pt-[3.9rem]">
      <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
