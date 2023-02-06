import React, { useRef } from "react";
import { history } from "../../App";
import { useNavigate } from "react-router-dom";

export default function ReactForm(props) {
  const navigate = useNavigate();

  const userLoginRef = useRef({
    userName: "",
    passWord: "",
  });

  console.log("123");

  const handleChange = (e) => {
    const { value, id } = e.target;
    userLoginRef.current[id] = value;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userLoginRef.current);

    let promise = new Promise((resolse) => {
      setTimeout(() => {
        console.log("Đăng nhập api");
        resolse("Đăng nhập thành công!");
      }, 2000);
    });

    let result = await promise;

    console.log(result);
    navigate("home");

    //Có replace : là k lưu lại lịch sử khi back trang
    //Không có replace là lưu lại lịch sử khi back trang

    //history.push("/");
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <p>username</p>
        <input
          className="form-control"
          id="userName"
          onChange={handleChange}
        ></input>
      </div>
      <div className="form-group">
        <p>password</p>
        <input
          className="form-control"
          id="passWord"
          onChange={handleChange}
        ></input>
      </div>
      <div className="form-group">
        <button className="btn btn-success">Login</button>
      </div>
    </form>
  );
}
