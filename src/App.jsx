import "./App.css";

import Layout from "./component/Layout";
import Home from "./Pages/Home/Home";
import ServiceOutlet from "./Pages/our service/ServiceOutlet";
import Shots from "./Pages/Shots/Shots";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Shots />} />
      {/* <Route index element={<Home />} /> */}
      {/* <Route path="services" element={<ServiceOutlet />} /> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
