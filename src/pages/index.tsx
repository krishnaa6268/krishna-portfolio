import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants";
import MainLayout from "../layout/MainLayout";
import Loader from "../components/Loader";
import Landing from "./Public/Landing";

// Lazy load components
const NotFound = lazy(() => import("./Public/NotFound"));

export default function Pages() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.LANDING} element={<Landing />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
