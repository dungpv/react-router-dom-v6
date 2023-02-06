import React from "react";
import Header from "../Components/HeaderHome/Header";
import { Outlet } from "react-router-dom";

export default function HomeTemplate(props) {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}
