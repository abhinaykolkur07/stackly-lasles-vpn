import React from "react";

import User1 from "../assets/user1.png";
import User2 from "../assets/user2.png";
import User3 from "../assets/user3.png";

const testimonials = [
  {
    image: User1,
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    review:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
    active: true,
  },
  {
    image: User2,
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: "4.5",
    review:
      "I like it because I like to travel far and still can connect with high speed.",
    active: false,
  },
  {
    image: User3,
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: "4.5",
    review:
      "This is very unusual for my business that currently requires a virtual private network that has high security.",
    active: false,
  },
];

const TestimonialsSection = () => {
  return (
<section className="bg-white py-24">
      <div className="max-w-[1140px] mx-auto px-5">
        
        {/* Heading */}
       {/* Heading Section */}
<div className="w-full flex flex-col items-center text-center mb-20">
  <h2 className="max-w-[450px] text-[35px] leading-[50px] font-medium text-[#0B132A]">
    Trusted by Thousands of
    <br />
    Happy Customer
  </h2>

  <p className="max-w-[555px] mt-5 text-[16px] leading-[30px] text-[#4F5665]">
    These are the stories of our customers who have joined us with great
    pleasure when using this crazy feature.
  </p>
</div>
        {/* Cards */}
        <div className=" flex justify-between gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`w-[400px] h-[230px] rounded-[10px] bg-white p-[30px] transition-all
              ${
                item.active
                  ? "border-2 border-[#F53838]"
                  : "border border-[#DDDDDD]"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[50px] h-[50px] rounded-full object-cover"
                  />

                  <div>
                    <h4 className="text-[18px] font-medium text-[#0B132A]">
                      {item.name}
                    </h4>

                    <p className="text-[14px] text-[#4F5665]">
                      {item.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[16px] text-[#0B132A]">
                    {item.rating}
                  </span>
                  <span className="text-yellow-400">⭐</span>
                </div>
              </div>

              <p className="mt-8 text-[16px] leading-[30px] text-[#0B132A]">
                "{item.review}"
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between mt-14">
          <div className="flex items-center gap-4">
            <div className="w-[45px] h-[15px] rounded-full bg-[#F53838]" />
            <div className="w-[15px] h-[15px] rounded-full bg-[#DDE0E4]" />
            <div className="w-[15px] h-[15px] rounded-full bg-[#DDE0E4]" />
            <div className="w-[15px] h-[15px] rounded-full bg-[#DDE0E4]" />
          </div>

          <div className="flex items-center gap-5">
            <button className="w-[60px] h-[60px] rounded-full border-2 border-[#F53838] flex items-center justify-center text-[#F53838] text-xl">
              ←
            </button>

            <button className="w-[60px] h-[60px] rounded-full bg-[#F53838] text-white flex items-center justify-center text-xl">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;