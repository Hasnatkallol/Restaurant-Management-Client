import React, { useState } from "react";
// Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1600&q=80",
    title: "Optimize Your Restaurant Operations",
    description:
      "Experience seamless management tools that simplify daily tasks and maximize efficiency.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=1600&q=80",
    title: "Smart Kitchen Insights",
    description:
      "Analyze what’s cooking! Get insights on your most loved and best-performing dishes.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
    title: "Boost Your Business",
    description:
      "From order to inventory, manage every step with precision and ease using BistroFlow.",
  },
];

const Slider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="py-10 bg-[#403F2B]">
      <div
        onMouseEnter={() => swiperInstance && swiperInstance.autoplay.stop()}
        onMouseLeave={() => swiperInstance && swiperInstance.autoplay.start()}
      >
        <Swiper
          onSwiper={setSwiperInstance}
          pagination={{ dynamicBullets: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-[50vh]"
        >
          {slides.map(({ id, image, title, description }) => (
            <SwiperSlide key={id} className="relative">
              <img
                src={image}
                alt={title}
                className="w-full h-[90vh] object-cover"
                loading="lazy"
              />
              {/* Black gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black  to-black opacity-55"></div>
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <div className="text-center text-white max-w-2xl relative z-10">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {title}
                  </h1>
                  <p className="mb-6 text-lg">{description}</p>
                  <Link
                    to="/allfoods"
                    className="bg-[#F3DB89] btn px-8 py-1 text-2xl border-none rounded-4xl text-[#403F2B] hover:bg-[#403F2B] hover:text-[#F3DB89]"
                  >
                    View All Foods
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
