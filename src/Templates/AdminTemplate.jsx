import React from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";

export default function AdminTemplate() {
  //   if (!localStorage.getItem("userLogin")) {
  //     return <Navigate to={"/"} replace={false}></Navigate>;
  //   }

  return (
    <div className="pt-5 bg-dark">
      <div className="d-flex">
        <div className="w-25 bg-dark text-white" style={{ minHeight: "100vh" }}>
          <nav>
            <ul>
              <li>
                <NavLink to="products">Product Management</NavLink>
              </li>
              <li>
                <NavLink to="users">User Management</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-75 bg-light">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
