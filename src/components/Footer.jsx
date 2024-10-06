import React from "react";
// import { footerLinks } from "../constants";



const footerLinks = {
  shopAndLearn: {
    title: 'Shop and Learn',
    items: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards']
  },
  appleWallet: {
    title: 'Apple Wallet',
    items: ['Wallet']
  },
  services: {
    title: 'Account',
    items: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com']
  },
  entertainment: {
    title: 'Entertainment',
    items: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Podcasts', 'Apple Books', 'App Store']
  },
  appleStore: {
    title: 'Apple Store',
    items: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Group Reservations', 'Apple Camp', 'Apple Trade In', 'Ways to Buy', 'Recycling Programme', 'Order Status', 'Shopping Help']
  },
  business: {
    title: 'For Business',
    items: ['Apple and Business', 'Shop for Business']
  },
  education: {
    title: 'For Education',
    items: ['Apple and Education', 'Shop for Education', 'Shop for University']
  },
  healthcare: {
    title: 'For Healthcare',
    items: ['Apple in Healthcare', 'Health on Apple Watch']
  },
  appleValues: {
    title: 'Apple Values',
    items: ['Accessibility', 'Education', 'Environment', 'Privacy', 'Supply Chain']
  },
  about: {
    title: 'About Apple',
    items: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple']
  }
};

const FooterColumn = ({ title, items }) => (
  <div className="mb-8">
    <h3 className="font-semibold text-sm text-white-100 mb-2">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index}>
          <a href="#" className="text-sm text-gray-400 hover:underline"> 
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const AppleFooter = () => {
  return (
    <footer className="bg-[#1d1d1f] text-white">
      <div className="max-w-[980px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-12">
          <div>
            <FooterColumn {...footerLinks.shopAndLearn} />
            <FooterColumn {...footerLinks.appleWallet} />
          </div>
          
          <div>
            <FooterColumn {...footerLinks.services} />
            <FooterColumn {...footerLinks.entertainment} />
          </div>
          
          <div>
            <FooterColumn {...footerLinks.appleStore} />
          </div>
          
          <div>
            <FooterColumn {...footerLinks.business} />
            <FooterColumn {...footerLinks.education} />
            <FooterColumn {...footerLinks.healthcare} />
          </div>

          <div>
            <FooterColumn {...footerLinks.appleValues} />
            <FooterColumn {...footerLinks.about} />
          </div>
        </div>

       
          <p className="text-sm text-gray-400 mb-2">
            More ways to shop: <a href="#" className="text-blue-400 hover:underline">Find an Apple Store</a> or <a href="#" className="text-blue-400 hover:underline">other retailer</a> near you. Or call 000800 040 1966.
          </p>
          <div className="mt-8 pt-8 border-t border-gray-700">
          
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mt-4 text-xs text-gray-400">
            <div className="flex flex-wrap gap-x-4 mb-2 ma-1 md:mb-0">
              <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:underline">Terms of Use</a>
              <span>|</span>
              <a href="#" className="hover:underline">Sales Policy</a>
              <span>|</span>
              <a href="#" className="hover:underline">Legal</a>
              <span>|</span>
              <a href="#" className="hover:underline">Site Map</a>
            </div>
            <div>
              <span>India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppleFooter;
