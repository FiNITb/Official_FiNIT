import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import logo from '../../assets/FiNIT_Logo.jpg';

// Data for links, social media, and contact
const socialMediaLinks = [
  { icon: <FaYoutube size={24} />, url: "https://www.youtube.com/@finit_nitb" },
  { icon: <FaXTwitter size={24} />, url: "https://x.com/finit_nitb" },
  { icon: <FaLinkedinIn size={24} />, url: "https://www.linkedin.com/company/finit-nit-bhopal" },
  { icon: <FaInstagram size={24} />, url: "https://www.instagram.com/finit_nitb/" },
];

const navigationLinks = [
  { name: "Home", to: "" },
  { name: "About", to: "about" },
  { name: "Events", to: "events" },
  { name: "Contact Us", to: "contact" },
];

const contactInfo = [
  { name: "Shriyansh Chourasiya", phone: "+91 79095 40155" },
  { name: "Ayush Gautam", phone: "+91 6398 632 136" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-purple-700 text-white py-12">
      <div className="container mx-auto px-6">
        <div style={{ fontFamily: 'fh2' }} className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Website Logo and Social Media */}
          <div className="flex flex-col items-start">
            <img src={logo} loading='lazy' alt="FiNIT Logo" className="h-16 mb-4" />
            <p className="mb-4">FiNIT - The Finance Society</p>
            <div className="flex space-x-4">
              {socialMediaLinks.map((social, index) => (
                <a style={{fontFamily:'fh2'}} key={index} href={social.url} target='_blank' className="hover:text-teal-300 transition-transform transform hover:scale-110">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.to} className="hover:text-teal-300">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  {contact.name}: <a href={`tel:${contact.phone}`} className="hover:text-teal-300">{contact.phone}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* College Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Locate Us</h3>
            <p>Maulana Azad National Institute of Technology, Bhopal</p>
            <p>MANIT square, Near Mata Mandir</p>
            <p>PIN:462003</p>
          </div>

        </div>

        <hr className="my-8 border-teal-300" />

        {/* Copyright */}
        <p className="text-center">&copy; {new Date().getFullYear()} FiNIT - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
