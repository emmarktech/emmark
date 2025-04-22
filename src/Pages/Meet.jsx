import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const founders = [
    {
      name: "Mark Onwa",
      role: "CEO & Visionary",
      image: "/assets/mark.jpg",
    },
    {
      name: "Majesty Harrison",
      role: "Cyber Security Expert & Lead Engineer",
      image: "/assets/majesty.jpg",
    },
    {
      name: "Josh Graphics",
      role: "Product/Graphics Designer",
      image: "/assets/emily.jpg",
    },
    {
      name: "Nwaneri DC",
      role: "Fulstack Dev.",
      image: "/assets/dave.jpg",
    },
    {
      name: "Purity Olachi",
      role: "Social Media Manager",
      image: "/assets/emily.jpg",
    },
  ];
  
const Meet = () => {
  return (
    <div className="py-16 px-4 bg-white text-center">
      <h2 className="text-4xl font-bold mb-5 text-gray-800">Meet Our Founders</h2>
      <p className="text-gray-600 max-w-xl mx-auto text-center font-bold pt-[-16] mb-5">
  A passionate team of innovators, visionaries, and tech enthusiasts driving Emmark-Tech forward — meet the minds shaping the future of digital solutions.
</p>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        pagination={{ clickable: true }}
        // navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        className="max-w-6xl mx-auto"
      >
        {founders.map((founder, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center bg-gray-50 rounded-xl shadow-md p-6 mb-16">
            <img
              src={founder.image}
            //   alt={founder.name}
              className="w-40 h-40 rounded-full border-4 border-gray-200 shadow-sm hover:scale-105 transition-all duration-300" style={{marginLeft:'auto',marginRight:'auto'}}
            />
            <h3 className="mt-6 text-xl font-semibold text-gray-800">{founder.name}</h3>
            <p className="text-sm text-gray-500" style={{paddingBottom:'3vh',}}>{founder.role}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Meet;
