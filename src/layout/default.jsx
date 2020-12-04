import React from "react";
import PropTypes from "prop-types";
import Navbar from "../components/General/Navbar";
import Footer from "../components/General/Footer";

const DefaultLayout = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
