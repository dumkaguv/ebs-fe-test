import { Routes, Route } from "react-router-dom";
import { RoutesEnum } from "./constants/routes-enum";
import { MainLayout } from "@/components/shared";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("@/pages/home-page/home-page"));
const CartPage = lazy(() => import("@/pages/cart-page"));
const ProductPage = lazy(() => import("@/pages/product-page"));

export const AppRouter = () => (
  <Suspense>
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
        <Route
          path={`${RoutesEnum.product}/:id`}
          element={<ProductPage />}
        />
      </Route>
    </Routes>
  </Suspense>
);
