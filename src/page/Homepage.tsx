
import ServiceHome from "components/Homepage/ServiceHome";


import NavBar from "components/NavBar/nav-bar";
import React, { useEffect, useState } from "react";
const Homepage = () => {
  const [state, setState] = useState({
    navItems: [
      { id: 1, idnm: "home", navheading: "Home" },
      { id: 3, idnm: "profile", navheading: "Profile" },
      { id: 4, idnm: "allservices", navheading: "Other Services" },
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
 
    

      <ServiceHome/>

     
    </>
  );
};

export default Homepage;
