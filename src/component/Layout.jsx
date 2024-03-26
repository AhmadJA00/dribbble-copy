import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main data-theme="light" className="bg-light w-screen ">
      {/* <Navbar /> */}
      <section className="">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}
