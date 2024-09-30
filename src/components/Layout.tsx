import React from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";

const Layout: React.FC = () => (
  <div>
    <Sidebar />
    <Content />
  </div>
);

export default Layout;
    