import { BannerSlider } from "@/components/module/landingPage/Banner";
import { LandingPageBooks } from "@/components/module/landingPage/LandingPageBooks";
import { useEffect } from "react";

export const Home = () => {
    useEffect(() => {
      document.title = "Home | LibraryHub";
    }, []);
  return (
    <div>
      <div className="w-11/12 mx-auto">
      <BannerSlider></BannerSlider>
        <LandingPageBooks></LandingPageBooks>
      </div>
    </div>
  );
};
