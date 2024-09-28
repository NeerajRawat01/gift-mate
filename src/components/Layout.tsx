import React from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";

const Layout: React.FC = () => (
  <div>
    {/* <NavBar /> */}
    <Sidebar />
    <Content />
  </div>
);

export default Layout;
