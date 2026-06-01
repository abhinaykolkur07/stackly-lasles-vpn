import React from "react";
import {
  CheckCircle,
} from "lucide-react";

import Illustration from "../assets/illustration-2.png";

const FeaturesSection = () => {
  const features = [
    "Powerfull online protection.",
    "Internet without borders.",
    "Supercharged VPN",
    "No specific time limits.",
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={Illustration}
              alt="Features"
              className="w-full max-w-[508px] h-auto object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="max-w-[430px]">
            <h2 className="text-[#0B132A] text-[35px] leading-[50px] font-medium mb-5">
              We Provide Many
              <br />
              Features You Can Use
            </h2>

            <p className="text-[#4F5665] text-[16px] leading-[30px] mb-8">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>

            <div className="space-y-3">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    size={20}
                    className="text-green-500 shrink-0"
                  />

                  <span className="text-[#4F5665] text-[14px] leading-[30px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;