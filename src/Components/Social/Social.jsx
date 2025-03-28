import React from "react";
import { FaYoutube, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
  const socialMedia = [
    { id: 1, icon: <FaYoutube />, link: "https://www.youtube.com/@finit_nitb" },
    { id: 2, icon: <FaSquareXTwitter />, link: "https://x.com/finit_nitb" },
    { id: 3, icon: <FaLinkedin />, link: "https://www.linkedin.com/company/finit-nit-bhopal" },
    { id: 4, icon: <FaInstagram />, link: "https://www.instagram.com/finit_nitb/" },
  ];

  return (
    <div className="flex gap-6 justify-center py-4">
      {socialMedia.map((social) => (
        <a
          key={social.id}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-teal-500 transition-transform transform duration-300 hover:text-purple-500 hover:scale-125"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
