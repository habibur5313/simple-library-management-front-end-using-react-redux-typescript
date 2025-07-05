import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";

const banners = [
  {
    image: "https://i.ibb.co/nM39c2Th/image-1.png",
    title: "Explore a World of Knowledge",
    buttonLabel: "Discover Now",
  },
  {
    image: "https://i.ibb.co/DgSb2PMj/image-2.png",
    title: "Borrow Your Favorite Books",
    buttonLabel: "Start Borrowing",
  },
  {
    image: "https://i.ibb.co/tpPYWnLt/image-3.png",
    title: "Track and Manage with Ease",
    buttonLabel: "Manage Library",
  },
  {
    image: "https://i.ibb.co/B2K98JY7/image-4.png",
    title: "Get Access Anytime, Anywhere",
    buttonLabel: "Explore Now",
  },
  {
    image: "https://i.ibb.co/HD7Ps9Sf/image-5.png",
    title: "Join Our Digital Library Today",
    buttonLabel: "Join Now",
  },
];

export const BannerSlider = () => {
  return (
    <div className="w-full mb-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop
        className="rounded-2xl overflow-hidden"
      >
        {banners.map((banner, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative w-full h-[400px] sm:h-[460px] md:h-[500px] lg:h-[600px] bg-cover bg-center"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center text-white space-y-4 px-4">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    {banner.title}
                  </h2>
                  <Button variant="secondary" className="text-base md:text-lg">
                    {banner.buttonLabel}
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
