import { Fragment } from "react";

import Menu from "@/views/global/menu/Main";
import Footer from "@/views/global/footer/Main";

import Home from "./components/Home";
import Contact from "./components/Contact";
import Carousel from "./components/Carousel";
import Parallax from "./components/Parallax";
import Information from "./components/Information";

const Main = () => {
  return (
    <Fragment>
      <Menu />
      <Home />
      <Information />
      <Parallax />
      <Carousel />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Main;
