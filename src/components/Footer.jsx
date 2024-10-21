import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { footerLinks } from "../constants";

// FooterSection Component
const FooterSection = ({ title, children }) => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="flex flex-col ">
      <button
        className="flex justify-between font-semibold text-white mb-1 border-b-1 border-gray-100 py-2 md:py-0 md:border-none"
        onClick={(e) => setExpand(!expand)}
      >
        <h3>{title}</h3>
        <button
          className={`text-gray-200 text-md flex items-center md:hidden ${
            expand && "rotate-180"
          }`}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
          </svg>
        </button>
      </button>
      <div className={`space-y-2 ${expand || "hidden md:block"}`}>
        {children}
      </div>
    </div>
  );
};

// FooterLink Component
const FooterLink = ({ children }) => (
  <a href="#" className="text-[#ffffffcc] hover:underline text-[12px] block">
    {children}
  </a>
);

export default function Footer() {
  return (
    <div className="bg-[#1d1d1f] px-3 lg:px-52">
      {/* Breadcrumb Section */}
      {/* <nav className="flex items-center gap-2 pl-40 py-1 mx-28"> */}
      <nav className="flex items-center gap-2  py-1 ">
        <a href="#" className="#FFFFFFCC text-[12px] hover:underline">
          <svg className="w-4 h-4" viewBox="0 0 17 17" fill="currentColor">
            <path
              d="M13.5545 6.1362C13.4548 6.2172 11.6936 7.2558 11.6936 9.5652C11.6936 12.2364 13.9346 13.1814 14.0017 13.2048C13.9914 13.2624 13.6457 14.499 12.8201 15.759C12.084 16.8678 11.3152 17.9748 10.1457 17.9748C8.97617 17.9748 8.67518 17.2638 7.32506 17.2638C6.00934 17.2638 5.54152 17.9982 4.47174 17.9982C3.40197 17.9982 2.65553 16.9722 1.7973 15.7122C0.803194 14.2326 0 11.934 0 9.7524C0 6.2532 2.17396 4.3974 4.31351 4.3974C5.45037 4.3974 6.39803 5.1786 7.11179 5.1786C7.79115 5.1786 8.85061 4.3506 10.144 4.3506C10.6342 4.3506 12.3953 4.3974 13.5545 6.1362ZM9.52997 2.8692C10.0649 2.205 10.4432 1.2834 10.4432 0.3618C10.4432 0.234 10.4329 0.1044 10.4106 0C9.54029 0.0342 8.50491 0.6066 7.88059 1.3644C7.39042 1.9476 6.93292 2.8692 6.93292 3.8034C6.93292 3.9438 6.95528 4.0842 6.9656 4.1292C7.02064 4.14 7.11007 4.1526 7.19951 4.1526C7.98034 4.1526 8.96241 3.6054 9.52997 2.8692Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
        </a>
        <span className="text-gray-12px">›</span>
        <a href="#" className="#FFFFFFCC text-[12px] hover:underline">
          iPhone
        </a>
        <span className="#FFFFFFCC">›</span>
        <a href="#" className="#FFFFFFCC text-[12px] hover:underline">
          iPhone 16 Pro
        </a>
      </nav>

      {/* Main Footer */}
      <footer className="max-w-[93vw]   pt-3 pb-4 text-[12px]">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 mb-12 text-[12px]">
          {/* Shop and Learn */}
          <div>
            <FooterSection title="Shop and Learn">
              <FooterLink>Store</FooterLink>
              <FooterLink>Mac</FooterLink>
              <FooterLink>iPad</FooterLink>
              <FooterLink>iPhone</FooterLink>
              <FooterLink>Watch</FooterLink>
              <FooterLink>AirPods</FooterLink>
              <FooterLink>TV & Home</FooterLink>
              <FooterLink>AirTag</FooterLink>
              <FooterLink>Accessories</FooterLink>
              <FooterLink>Gift Cards</FooterLink>
            </FooterSection>
            <div className=" md:mt-5">
              <FooterSection title="Apple Wallet">
                <FooterLink>Wallet</FooterLink>
              </FooterSection>
            </div>
          </div>

          {/* Account and Entertainment */}
          <div>
            <FooterSection title="Account">
              <FooterLink>Manage Your Apple Account</FooterLink>
              <FooterLink>Apple Store Account</FooterLink>
              <FooterLink>iCloud.com</FooterLink>
            </FooterSection>
            <div className=" md:mt-5">
              <FooterSection title="Entertainment">
                <FooterLink>Apple One</FooterLink>
                <FooterLink>Apple TV+</FooterLink>
                <FooterLink>Apple Music</FooterLink>
                <FooterLink>Apple Arcade</FooterLink>
                <FooterLink>Apple Podcasts</FooterLink>
                <FooterLink>Apple Books</FooterLink>
                <FooterLink>App Store</FooterLink>
              </FooterSection>
            </div>
          </div>

          {/* Apple Store */}
          <FooterSection title="Apple Store">
            <FooterLink>Find a Store</FooterLink>
            <FooterLink>Genius Bar</FooterLink>
            <FooterLink>Today at Apple</FooterLink>
            <FooterLink>Apple Camp</FooterLink>
            <FooterLink>Apple Trade In</FooterLink>
            <FooterLink>Order Status</FooterLink>
            <FooterLink>Shopping Help</FooterLink>
          </FooterSection>

          {/* For Business, Education, Healthcare */}
          <div>
            <FooterSection title="For Business">
              <FooterLink>Apple and Business</FooterLink>
              <FooterLink>Shop for Business</FooterLink>
            </FooterSection>
            <div className="md:mt-5">
              <FooterSection title="For Education">
                <FooterLink>Apple and Education</FooterLink>
                <FooterLink>Shop for University</FooterLink>
              </FooterSection>
            </div>
            <div className=" md:mt-5">
              <FooterSection title="For Healthcare">
                <FooterLink>Apple in Healthcare</FooterLink>
                <FooterLink>Health on Apple Watch</FooterLink>
              </FooterSection>
            </div>
          </div>

          {/* Apple Values and About Apple */}
          <div>
            <FooterSection title="Apple Values">
              <FooterLink>Accessibility</FooterLink>
              <FooterLink>Education</FooterLink>
              <FooterLink>Environment</FooterLink>
              <FooterLink>Privacy</FooterLink>
              <FooterLink>Supplier Responsibility</FooterLink>
            </FooterSection>
            <div className="md:mt-5">
              <FooterSection title="About Apple">
                <FooterLink>Newsroom</FooterLink>
                <FooterLink>Apple Leadership</FooterLink>
                <FooterLink>Career Opportunities</FooterLink>
                <FooterLink>Investors</FooterLink>
                <FooterLink>Ethics & Compliance</FooterLink>
                <FooterLink>Events</FooterLink>
                <FooterLink>Contact Apple</FooterLink>
              </FooterSection>
            </div>
          </div>
        </div>

        {/* Store Locator */}
        <div className="text-[12px] text-gray-400 mb-4">
          More ways to shop:{" "}
          <a href="#" className="text-blue underline">
            Find an Apple Store
          </a>{" "}
          or{" "}
          <a href="#" className="text-blue underline">
            other retailer
          </a>{" "}
          near you. Or call 0008000 040 1966.
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col-reverse md:flex-row  justify-between gap-5 md:gap-0 border-t md:border-gray-700 pt-2 text-gray-400">
          <div className="flex flex-col lg:flex-row justify-between  lg:items-center text-[12px] ">
            <div className="mb-1 md:mb-0">
              <span>Copyright © 2024 Apple Inc. All rights reserved.</span>
            </div>
            <div className="flex flex-wrap gap-3 text-gray-200">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <span className="block">|</span>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
              <span className="block">|</span>
              <a href="#" className="hover:underline">
                Sales Policy
              </a>
              <span className="block">|</span>
              <a href="#" className="hover:underline">
                Legal
              </a>
              <span className="block">|</span>
              <a href="#" className="hover:underline">
                Site Map
              </a>
            </div>
          </div>
          <div>India</div>
        </div>
      </footer>
    </div>
  );
}
