import { Outlet } from "react-router";
import { Navbar } from "./sharedFile/Navbar";
import { Footer } from "./sharedFile/Footer";

export const App = () => {
  return (
    <>
      <div className="container mx-auto  ">
        <div className="pb-6 pt-4 border px-5">
          <Navbar></Navbar>
        </div>
        <div className="w-11/12 mx-auto border min-h-[calc(100vh-300px)]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
