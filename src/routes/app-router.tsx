import { Routes, Route } from "react-router-dom";
import { RoutesEnum } from "./constants/routes-enum";
import { HomePage, CartPage } from "@/pages";
import { MainLayout } from "@/components/shared";

export const AppRouter = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route
        path={RoutesEnum.home}
        element={<HomePage />}
      />
      <Route
        path={RoutesEnum.cart}
        element={<CartPage />}
      />
    </Route>
  </Routes>
);
