import React from "react";
import Head from "next/head";

import { Navbar, Footer } from "./index";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Jon-Michael Gelua</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
