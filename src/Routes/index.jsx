import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));

const Routes = {
  "/": () => <Home />,
  "/home": () => <Home />,
  "/about": () => <About />,
  "/contact": () => <Contact />,
};

export default Routes;
