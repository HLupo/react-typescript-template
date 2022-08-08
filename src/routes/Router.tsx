import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../views/App/App";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"*"} element={<h1>{"Route doesn't exist"}</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
