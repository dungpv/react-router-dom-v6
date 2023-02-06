import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeTemplate from "./Templates/HomeTemplate";
import Home from "./Pages/Home/Home";
import ReactForm from "./Pages/ReactForm/ReactForm";
import Shop from "./Pages/Shop/Shop";
import AdminTemplate from "./Templates/AdminTemplate";
import Users from "./Pages/Admin/Users/Users";
import Products from "./Pages/Admin/Products/Products";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import Detail from "./Pages/Detail/Detail";
import DemoSearch from "./Pages/DemoSearch/DemoSearch";

export const history = createBrowserHistory({ window });

function App() {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<HomeTemplate></HomeTemplate>}>
          <Route index path="" element={<Home></Home>}></Route>
          <Route path="home" element={<Home></Home>}></Route>
          <Route path="form" element={<ReactForm></ReactForm>}></Route>
          <Route path="shop" element={<Shop></Shop>}></Route>
          <Route path="searchdemo" element={<DemoSearch></DemoSearch>}></Route>
          <Route path="detail">
            <Route path=":id" element={<Detail></Detail>}></Route>
          </Route>
          <Route path="*" element={<Navigate to={"home"}></Navigate>}></Route>
        </Route>
        <Route path="/admin" element={<AdminTemplate></AdminTemplate>}>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="products" element={<Products></Products>}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
