import React from "react";

const SubscribeSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1140px] mx-auto px-5">

        <div
          className="
            bg-white
            rounded-[10px]
            border border-[#E6E6E6]
            shadow-[0_25px_60px_rgba(13,16,37,0.08)]
            px-[70px]
            py-[58px]
            flex
            items-center
            justify-between
          "
        >
          {/* Left Content */}
          <div className="max-w-[410px]">
            <h2 className="text-[35px] leading-[45px] font-medium text-[#0B132A]">
              Subscribe Now for
              <br />
              Get Special Features!
            </h2>

            <p className="mt-5 text-[16px] leading-[30px] text-[#4F5665]">
              Let's subscribe with us and find the fun.
            </p>
          </div>

          {/* Button */}
          <button
            className="
              w-[250px]
              h-[60px]
              rounded-[10px]
              bg-[#F53838]
              border-2
              border-[#F53838]
              text-white
              font-bold
              text-[16px]
              shadow-[0_20px_40px_rgba(245,56,56,0.35)]
              hover:bg-white
              hover:text-[#F53838]
              transition-all
              duration-300
            "
          >
            Subscribe Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default SubscribeSection;