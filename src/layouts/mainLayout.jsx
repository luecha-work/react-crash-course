import PropTypes from "prop-types";
import React, { useEffect } from "react";
import NavBar from "../components/Navbar";

const MainLayout = ({ children }) => {
  useEffect(() => {
    console.log("MainLayout...");
  }, []);

  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;
