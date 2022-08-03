
import Contact from "components/LandingPage/contact";
import Footer from "components/LandingPage/footer";
import AllServiceCompo from "components/Service/AllServiceCompo"
import Section from "components/LandingPage/section";
import Service from "components/LandingPage/service";
import NavBar from "components/NavBar/nav-bar";
import React, { useEffect, useState } from "react";
const AllService = () => {
  const [state, setState] = useState({
    navItems: [
      { id: 1, idnm: "home", navheading: "Home" },
      { id: 3, idnm: "servicelist", navheading: "Services" },
      { id: 4, idnm: "services", navheading: "About" },
      { id: 7, idnm: "contact", navheading: "Contact" },
    ],
    pos: document.documentElement.scrollTop,
    imglight: false,
    navClass: "",
    fixTop: true,
  });
  const scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > state.pos) {
      setState({
        navClass: "nav-sticky",
        imglight: false,
        navItems: state.navItems,
        pos: state.pos,
        fixTop: state.fixTop,
      });
    } else {
      setState({
        navClass: "",
        imglight: false,
        navItems: state.navItems,
        pos: state.pos,
        fixTop: state.fixTop,
      });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
    return () => {
      window.removeEventListener("scroll", scrollNavigation, true);
    };
  }, []);
  return (
    <>
      <NavBar
        navItems={state.navItems}
        navClass={state.navClass}
        imglight={state.imglight}
        top={state.fixTop}
      />
    
      <AllServiceCompo />
      
      

      

      {/* Importing Clients */}
      

      {/* Importing Contact Us */}
  

      {/* Importing Footer */}
      <Footer />
    </>
  );
};

export default AllService;
