import React from "react";
import BigImage from "../assets/big-image.png";

const BigImageSection = () => {
  return (
    <section className="bg-white pt-[80px] pb-[40px]">
      <div className="max-w-[1140px] mx-auto px-5">
        {/* Heading */}
       {/* Heading */}
<div className="w-full flex flex-col items-center text-center">
  <h2 className="max-w-[420px] text-[#0B132A] text-[35px] font-medium leading-[50px]">
    Huge Global Network
    <br />
    of Fast VPN
  </h2>

  <p className="max-w-[560px] mt-[20px] text-[16px] leading-[30px] text-[#4F5665]">
    See <span className="font-medium">LaslesVPN</span> everywhere to
    make it easier for you when you move locations.
  </p>
</div>
        {/* Map Image */}
        <div className="mt-[140px] flex justify-center">
 <img
  src={BigImage}
  alt="Global Network"
  className="w-full max-w-[1060px] h-auto object-contain -mt-[120px]"
/>
</div>
      </div>
    </section>
  );
};

export default BigImageSection;