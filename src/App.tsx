import { Outlet } from "react-router";
import { Navbar } from "./sharedFile/Navbar";
import { Footer } from "./sharedFile/Footer";

export const App = () => {
  return (
    <>
      <div className="container mx-auto  ">
        <div className="pb-6 pt-4 px-5">
          <Navbar></Navbar>
        </div>
         <div className="min-h-[calc(100vh-410px)]">
           <Outlet></Outlet>
         </div>
      </div>
      <Footer></Footer>
    </>
  );
};
