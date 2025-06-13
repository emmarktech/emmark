import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Daniel",
    role: "- Meme Trader",
    testimony:
      "I recently launched my first ever memecoin and it was a huge banger.. shout out to Emmark-Tech. I love you guys lots ",
  },
  {
    name: "Ella Victory",
    role: "- Frontend Developer",
    testimony:
      "I joined Emmark-Tech’s learning program with zero tech experience. Today, I’m building real-world applications confidently. It's a life-changer!",
  },
  {
    name: "Victor Igbokwe",
    role: "- E-commerce Entrepreneur",
    testimony:
      "Recenctly got my E-commerce website from Emmark-Tech.. and gracefully speaking I've done more numbers than I used to do formerly.",
  },
  {
    name: "Sarah Ahmed",
    role: "- Tech Learner",
    testimony:
      "The Emmark-Tech mentorship is gold. The community, the tutors — everything is designed to make you grow fast in tech.",
  },
  {
    name: "Leon David",
    role: "- Freelancer",
    testimony:
      "Emmark-Tech gave me the tools and confidence to launch my freelance tech career. It’s one of the best decisions I’ve made.Much thanks Guys ..",
  },
  {
    name: "James Oluwatobi",
    role: "- Junior developer",
    testimony:
      "I can't over-emphasize it but i think Emmark-Tech has really helped me in my quest for success in the tech industry",
  },
  {
    name: "Mr Ebuka",
    role: "- Fulstack developer",
    testimony:
      "Finally I can be called a tech guy ... Thank you Emmark-Tech. More grace to your wonderful team of proffessionals!!!!",
  },
  {
    name: "Adaeze Uwakwe",
    role: "- Graphics Designer",
    testimony:
      "After years of struggling to learn from youtube,then I finally came across Emmark-Tech and the story changed definetly for me. I'm so grateful guys..",
  },
  {
    name: "Elvis Chikwendu",
    role: "- CEO elionphones Nigeria",
    testimony:
      "I've always needed to reach more customers and make more sales generally and today that's the testimony.. My E-commerce website is doing perfectly well.",
  },
];

const Testimonials = () => {
  return (
    <div className="py-20 px-4 bg-gray-50 text-center ">
      <h2 className="text-3xl font-bold mb-6 text-black ">
        What People Are Saying
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-10 font-medium">
        A few out of so many wonderful testimonies from wonderful people{" "}
        <div>
          <strong>
            — You too can experience the impact, whether through our tech
            support services or our tech mentorship programs.
          </strong>
        </div>
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
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="max-w-6xl mx-auto "
      >
        {testimonials.map((item, index) => (
          <SwiperSlide
            key={index}
            className="bg-gray-100 rounded-xl shadow-2xl p-5 md:p-12 lg:p-12 text-left hover:shadow-xl transition-all duration-300 mb-16 hover:scale-205 hover:border-blue-400 border border-transparent"
          >
            <p className="text-gray-700 italic mb-4">"{item.testimony}"</p>
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.role}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
