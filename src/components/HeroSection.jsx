import React from "react";

// ================= IMAGES =================
import HeroImage from "../assets/hero.png";
import UserIcon from "../assets/user-icon.png";
import LocationIcon from "../assets/location-icon.png";
import ServerIcon from "../assets/server-icon.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-white pt-[50px] pb-[100px]">
      {/* ================= CONTAINER ================= */}
      <div className="max-w-[1140px] mx-auto px-5">
        
        {/* ================= HERO SECTION ================= */}
        <div className="flex flex-col lg:flex-row items-center justify-center pt-[80px] gap-[30px]">          
          {/* ================= LEFT CONTENT ================= */}
          <div className="w-full lg:w-[520px]">
            <h1 className="text-[#0B132A] text-[50px] leading-[70px] font-bold">
              Want anything to be
              <br />
              easy with LaslesVPN.
            </h1>

            <p className="mt-[30px] text-[#4F5665] text-[16px] leading-[30px] max-w-[555px]">
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>

            <button
              className="
                mt-[50px]
                w-[250px]
                h-[60px]
                bg-[#F53838]
                rounded-[10px]
                text-white
                font-bold
                text-[16px]
                shadow-[0px_20px_40px_rgba(245,56,56,0.35)]
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Get Started
            </button>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
     <div className="w-full lg:w-[480px] flex justify-center">
            <img
              src={HeroImage}
              alt="Hero"
             className="w-full max-w-[450px] h-auto object-contain"
            />
          </div>
        </div>

        {/* ================= STATS SECTION ================= */}
        <div
          className="
            mt-[120px]
            bg-white
            rounded-[10px]
            border
            border-[#EEEEEE]
            shadow-[0px_15px_50px_rgba(13,16,37,0.05)]
            h-[180px]
            flex
            items-center
            justify-between
            px-[70px]
          "
        >
          {/* USERS */}
          <div className="flex items-center gap-5">
            <div className="w-[55px] h-[55px] rounded-full bg-[#FFECEC] flex items-center justify-center">
              <img
                src={UserIcon}
                alt="Users"
                className="w-[20px] h-[20px]"
              />
            </div>

            <div>
              <h2 className="text-[25px] font-bold text-[#0B132A]">
                90+
              </h2>

              <p className="text-[20px] text-[#4F5665]">
                Users
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="w-[1px] h-[100px] bg-[#EEEFF2]" />

          {/* LOCATIONS */}
          <div className="flex items-center gap-5">
            <div className="w-[55px] h-[55px] rounded-full bg-[#FFECEC] flex items-center justify-center">
              <img
                src={LocationIcon}
                alt="Locations"
                className="w-[20px] h-[20px]"
              />
            </div>

            <div>
              <h2 className="text-[25px] font-bold text-[#0B132A]">
                30+
              </h2>

              <p className="text-[20px] text-[#4F5665]">
                Locations
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="w-[1px] h-[100px] bg-[#EEEFF2]" />

          {/* SERVERS */}
          <div className="flex items-center gap-5">
            <div className="w-[55px] h-[55px] rounded-full bg-[#FFECEC] flex items-center justify-center">
              <img
                src={ServerIcon}
                alt="Servers"
                className="w-[20px] h-[20px]"
              />
            </div>

            <div>
              <h2 className="text-[25px] font-bold text-[#0B132A]">
                50+
              </h2>

              <p className="text-[20px] text-[#4F5665]">
                Servers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;