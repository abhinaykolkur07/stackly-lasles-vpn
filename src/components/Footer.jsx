import React from "react";

import Logo from "../assets/logo.png";
import FacebookIcon from "../assets/facebook.png";
import TwitterIcon from "../assets/twitter.png";
import InstagramIcon from "../assets/instagram.png";

const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8] py-[80px]">
      <div className="max-w-[1140px] mx-auto px-5">

        <div className="flex justify-between">

          {/* Left */}
          <div className="w-[340px]">

            <div className="flex items-center gap-3">
              <img
                src={Logo}
                alt="Logo"
                className="w-[35px] h-[35px]"
              />

              <h3 className="text-[20px] text-[#0B132A]">
                Lasles<span className="font-bold">VPN</span>
              </h3>
            </div>

            <p className="mt-5 text-[16px] leading-[30px] text-[#4F5665]">
              <span className="font-medium">LaslesVPN</span> is a private
              virtual network that has unique features and has high security.
            </p>

            <div className="flex items-center gap-5 mt-8">
              <img src={FacebookIcon} alt="" className="w-[34px] h-[34px]" />
              <img src={TwitterIcon} alt="" className="w-[34px] h-[34px]" />
              <img src={InstagramIcon} alt="" className="w-[34px] h-[34px]" />
            </div>

            <p className="mt-8 text-[#AFB5C0] text-[16px]">
              ©2020LaslesVPN
            </p>

          </div>

          {/* Product */}
          <div>
            <h3 className="font-medium text-[18px] mb-8">Product</h3>

            <ul className="space-y-4 text-[#4F5665]">
              <li>Download</li>
              <li>Pricing</li>
              <li>Locations</li>
              <li>Server</li>
              <li>Countries</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Engage */}
          <div>
            <h3 className="font-medium text-[18px] mb-8">Engage</h3>

            <ul className="space-y-4 text-[#4F5665]">
              <li>LaslesVPN ?</li>
              <li>FAQ</li>
              <li>Tutorials</li>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* Earn Money */}
          <div>
            <h3 className="font-medium text-[18px] mb-8">Earn Money</h3>

            <ul className="space-y-4 text-[#4F5665]">
              <li>Affiliate</li>
              <li>Become Partner</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;