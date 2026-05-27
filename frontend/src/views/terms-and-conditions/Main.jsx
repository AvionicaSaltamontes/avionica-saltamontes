import { Fragment } from "react";

import Menu from "@/views/global/menu/Main";
import Footer from "@/views/global/footer/Main";

import Info from "./components/Info";

const Main = () => {
  return (
    <Fragment>
      <Menu />
      <Info />
      <Footer />
    </Fragment>
  );
};

export default Main;
