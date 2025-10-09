import React from "react";
import logo from "../assets/logo.png";
import twitter from "../assets/fi_5969020.png";
import fb from "../assets/fb.png";
import linkdin from "../assets/linkdin.png";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-[#001931] text-neutral-content  p-10  md:px-30">
      <aside>
        <img className="h-10 w-10" src={logo} alt="" />
        <p className="text-2xl text-white font-bold">AppVerse</p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <div>
        <h1 className="text-xl text-white font-bold">Social Links</h1>
        <div className="flex items-center gap-4">
          <img src={twitter} alt="" />
          <img src={fb} alt="" />
          <img src={linkdin} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
