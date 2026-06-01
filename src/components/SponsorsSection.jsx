import React from "react";

import NetflixLogo from "../assets/netflix.png";
import RedditLogo from "../assets/reddit.png";
import AmazonLogo from "../assets/amazon.png";
import DiscordLogo from "../assets/discord.png";
import SpotifyLogo from "../assets/spotify.png";

const SponsorsSection = () => {
  const logos = [
    NetflixLogo,
    RedditLogo,
    AmazonLogo,
    DiscordLogo,
    SpotifyLogo,
  ];

  return (
    <section className="bg-white py-[64px]">
  <div className="max-w-[1140px] mx-auto px-5">
    <div className="grid grid-cols-5 items-center justify-items-center gap-8">
      <img
        src={NetflixLogo}
        alt="Netflix"
        className="h-[60px] lg:h-[70px] w-auto object-contain opacity-30"
      />

      <img
        src={RedditLogo}
        alt="Reddit"
        className="h-[60px] lg:h-[70px] w-auto object-contain opacity-30"
      />

      <img
        src={AmazonLogo}
        alt="Amazon"
        className="h-[60px] lg:h-[70px] w-auto object-contain opacity-30"
      />

      <img
        src={DiscordLogo}
        alt="Discord"
        className="h-[60px] lg:h-[70px] w-auto object-contain opacity-30"
      />

      <img
        src={SpotifyLogo}
        alt="Spotify"
        className="h-[60px] lg:h-[70px] w-auto object-contain opacity-30"
      />
    </div>
  </div>
</section>
  );
};

export default SponsorsSection;