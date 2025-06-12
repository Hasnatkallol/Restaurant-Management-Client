import React, { useState, useEffect } from "react";
import gellery from "../../assets/gellery.avif";

const images = [
  { src: "https://i.ibb.co/5XgZcCNg/download.jpg", alt: "Image 1" },
  { src: "https://i.ibb.co/20C1mMzJ/download.jpg", alt: "Image 2" },
  { src: "https://i.ibb.co/Qvjk0Kcw/download.jpg", alt: "Image 3" },
  { src: "https://i.ibb.co/qYPVyVD2/download.jpg", alt: "Image 4" },
  { src: "https://i.ibb.co/FL0ZtQS0/images.jpg", alt: "Image 5" },
  { src: "https://i.ibb.co/Qvjk0Kcw/download.jpg", alt: "Image 6" },
  { src: "https://i.ibb.co/5XgZcCNg/download.jpg", alt: "Image 7" },
  { src: "https://i.ibb.co/ds7WB4kY/download.jpg", alt: "Image 8" },
  { src: "https://i.ibb.co/yBpsrpcm/download.jpg", alt: "Image 9" },
  { src: "https://i.ibb.co/gFjtZ1bZ/download.jpg", alt: "Image 10" },
  { src: "https://i.ibb.co/Qvjk0Kcw/download.jpg", alt: "Image 11" },
  { src: "https://i.ibb.co/5XgZcCNg/download.jpg", alt: "Image 12" },
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openModal = (index) => {
    setCurrentSlide(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="">
      <div
        className="hero min-h-[40vh] mb-10 relative"
        style={{ backgroundImage: `url(${gellery})` }}
      >
        {/* Dark overlay for better text contrast */}
        <div className="hero-overlay bg-opacity-70 "></div>

        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl">
            {/* Main heading with gradient text */}
            <h1 className="mb-8 text-5xl md:text-6xl font-bold">
              <span className=" bg-clip-text text-white">Gellery</span>
            </h1>

            {/* Decorative divider */}
            <div className="flex  justify-center items-center my-6">
              <div className="w-12  h-px bg-white mx-2"></div>
              <span className="text-white text-xl">✧</span>
              <div className="w-12 h-px bg-white mx-2"></div>
            </div>

            {/* Description text */}
            <p className="mb-12 text-lg md:text-xl text-neutral-content/90">
              From savory starters to mouthwatering mains and decadent desserts
              - discover, manage, and enjoy the ultimate food experience.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 w-11/12 mx-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => openModal(index)}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer group"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-44 sm:h-52 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/90 flex flex-col justify-center items-center z-50 p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-6 text-white text-4xl font-bold hover:text-gray-300"
          >
            &times;
          </button>

          <div className="relative w-full max-w-5xl">
            <div className="text-white text-sm absolute top-2 left-2">
              {currentSlide + 1} / {images.length}
            </div>
            <img
              src={images[currentSlide].src}
              alt={images[currentSlide].alt}
              className="w-full max-h-[75vh] object-contain rounded-xl"
            />
            <p className="text-center text-white mt-3">
              {images[currentSlide].alt}
            </p>

            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 px-4 text-white text-3xl font-bold -translate-y-1/2 hover:bg-black/40"
            >
              &#10094;
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 px-4 text-white text-3xl font-bold -translate-y-1/2 hover:bg-black/40"
            >
              &#10095;
            </button>

            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 mt-6">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img.src}
                  alt={img.alt}
                  onClick={() => setCurrentSlide(idx)}
                  className={`cursor-pointer rounded-lg h-16 w-full object-cover transition-opacity duration-300 ${
                    idx === currentSlide
                      ? "opacity-100 ring-2 ring-white"
                      : "opacity-60"
                  } hover:opacity-100`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
