import { Routes, Route } from "react-router-dom";
import { RoutesEnum } from "./constants/routes-enum";

export const AppRouter = () => (
  <Routes>
    <Route path={RoutesEnum.home} element={<></>} />
    <Route path={RoutesEnum.cart} element={<></>} />
  </Routes>
);
