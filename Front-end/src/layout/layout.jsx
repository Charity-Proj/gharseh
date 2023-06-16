import React from "react";
import Footer from "./footer";
import  NavBar  from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
