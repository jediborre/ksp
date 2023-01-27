import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

export const navigation = [
  {
    name: "Home",
    path: "/",
    element: <HomePage />,
  }
];

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: navigation
  }
]);

export default router;