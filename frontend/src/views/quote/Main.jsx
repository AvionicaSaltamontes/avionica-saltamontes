import { Fragment } from "react";

import Menu from "@/views/global/menu/Main";
import Footer from "@/views/global/footer/Main";

import Header from "./components/Header";
import Form from "./components/Form";

const Main = () => {
  return (
    <Fragment>
      <Menu />
      <Header />
      <Form />
      <Footer />
    </Fragment>
  );
};

export default Main;
