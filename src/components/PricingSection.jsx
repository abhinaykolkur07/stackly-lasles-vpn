import React from "react";
import PricingImage from "../assets/pricing-box.png";
import TickIcon from "../assets/tick.png";

const plans = [
  {
    title: "Free Plan",
    price: "Free",
    features: [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
    active: false,
  },
  {
    title: "Standard Plan",
    price: "$9",
    features: [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anywhere",
    ],
    active: false,
  },
  {
    title: "Premium Plan",
    price: "$12",
    features: [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anywhere",
      "Get New Features",
    ],
    active: true,
  },
];

const PricingSection = () => {
  return (
    <section className="py-[80px] bg-[#FBFBFB]">
      <div className="max-w-[1140px] mx-auto px-5">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[35px] font-medium text-[#0B132A]">
            Choose Your Plan
          </h2>

          <p className="mt-5 text-[16px] leading-[30px] text-[#4F5665]">
            Let's choose the package that is best for you and
            <br />
            explore it happily and cheerfully.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[70px] flex flex-wrap justify-center gap-[50px]">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                w-[330px]
                h-[760px]
                rounded-[10px]
                bg-white
                flex
                flex-col
                justify-between
                items-center
                px-[30px]
                py-[40px]
                ${
                  plan.active
                    ? "border-2 border-[#F53838]"
                    : "border-2 border-[#DDDDDD]"
                }
              `}
            >
              <div className="flex flex-col items-center w-full gap-10 pt-4">
                {/* Image */}
                <img
                  src={PricingImage}
                  alt={plan.title}
                  className="w-[145px] h-auto mt-4"
                />

                {/* Plan Title */}
                <h3 className="text-[18px] font-medium text-[#0B132A] text-center">
                  {plan.title}
                </h3>

                {/* Features */}
                <div className="w-full flex flex-col items-center gap-4">
                  {plan.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center w-full max-w-[240px] gap-4"
                    >
                      <img
                        src={TickIcon}
                        alt="tick"
                        className="w-[18px] h-[18px] flex-shrink-0"
                      />

                      <span className="text-[14px] text-[#4F5665] text-center">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price + Button */}
              <div className="text-center w-full pb-[20px]">
                <h4 className="text-[25px] font-medium text-[#0B132A]">
                  {plan.price}
                  {plan.price !== "Free" && (
                    <span className="font-normal text-[#4F5665]">
                      {" "}
                      / mo
                    </span>
                  )}
                </h4>

                <button
                  className={`
                    mt-[20px]
                    w-[177px]
                    h-[45px]
                    rounded-full
                    text-[16px]
                    font-bold
                    transition-all
                    duration-300
                    ${
                      plan.active
                        ? "bg-[#F53838] text-white shadow-[0px_20px_40px_rgba(245,56,56,0.35)]"
                        : "border-2 border-[#F53838] text-[#F53838] hover:bg-[#F53838] hover:text-white"
                    }
                  `}
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;