import React from "react";



// const footerLinks = {
 
//   shopAndLearn: {
//     title: 'Shop and Learn',
//     items: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards']
//   },
//   appleWallet: {
//     title: 'Apple Wallet',
//     items: ['Wallet']
//   },
//   services: {
//     title: 'Account',
//     items: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com']
//   },
//   entertainment: {
//     title: 'Entertainment',
//     items: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Podcasts', 'Apple Books', 'App Store']
//   },
//   appleStore: {
//     title: 'Apple Store',
//     items: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Group Reservations', 'Apple Camp', 'Apple Trade In', 'Ways to Buy', 'Recycling Programme', 'Order Status', 'Shopping Help']
//   },
//   business: {
//     title: 'For Business',
//     items: ['Apple and Business', 'Shop for Business']
//   },
//   education: {
//     title: 'For Education',
//     items: ['Apple and Education', 'Shop for Education', 'Shop for University']
//   },
//   healthcare: {
//     title: 'For Healthcare',
//     items: ['Apple in Healthcare', 'Health on Apple Watch']
//   },
//   appleValues: {
//     title: 'Apple Values',
//     items: ['Accessibility', 'Education', 'Environment', 'Privacy', 'Supply Chain']
//   },
//   about: {
//     title: 'About Apple',
//     items: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple']
//   }
// };

// const FooterColumn = ({ title, items }) => (
//   <div className="mb-8">
//     <h3 className="font-semibold text-sm text-white-100 mb-2">{title}</h3>
//     <ul className="space-y-2">
//       {items.map((item, index) => (
//         <li key={index}>
//           <a href="#" className="text-sm text-gray-400 hover:underline"> 
//             {item}
//           </a>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const AppleFooter = () => {
//   return (
//     <footer className="bg-[#1d1d1f] text-white">
//       <div className="max-w-[980px] mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-x-12">
//           <div>
//             <FooterColumn {...footerLinks.shopAndLearn} />
//             <FooterColumn {...footerLinks.appleWallet} />
//           </div>
          
//           <div>
//             <FooterColumn {...footerLinks.services} />
//             <FooterColumn {...footerLinks.entertainment} />
//           </div>
          
//           <div>
//             <FooterColumn {...footerLinks.appleStore} />
//           </div>
          
//           <div>
//             <FooterColumn {...footerLinks.business} />
//             <FooterColumn {...footerLinks.education} />
//             <FooterColumn {...footerLinks.healthcare} />
//           </div>

//           <div>
//             <FooterColumn {...footerLinks.appleValues} />
//             <FooterColumn {...footerLinks.about} />
//           </div>
//         </div>

       
//           <p className="text-sm text-gray-400 mb-2">
//             More ways to shop: <a href="#" className="text-blue-400 hover:underline">Find an Apple Store</a> or <a href="#" className="text-blue-400 hover:underline">other retailer</a> near you. Or call 000800 040 1966.
//           </p>
//           <div className="mt-8 pt-8 border-t border-gray-700">
          
//           <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mt-4 text-xs text-gray-400">
//             <div className="flex flex-wrap gap-x-4 mb-2 ma-1 md:mb-0">
//               <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
//               <a href="#" className="hover:underline">Privacy Policy</a>
//               <span>|</span>
//               <a href="#" className="hover:underline">Terms of Use</a>
//               <span>|</span>
//               <a href="#" className="hover:underline">Sales Policy</a>
//               <span>|</span>
//               <a href="#" className="hover:underline">Legal</a>
//               <span>|</span>
//               <a href="#" className="hover:underline">Site Map</a>
//             </div>
//             <div>
//               <span>India</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default AppleFooter;
// }


// import appleSvg from "./assets/images/apple.svg";

<div className="border-t border-gray-700 pt-2 mr-2"></div>
const FooterSection = ({ title, children }) => (
  <div className="flex flex-col">
    <h3 className="font-semibold text-white mb-1">{title}</h3>
    <div className="space-y-2 ">
      {children}
    </div>
  </div>
);

const FooterLink = ({ children }) => (
  <a href="#" className="#FFFFFFCC  hover:underline text-[12px] block">
    {children}
  </a>
);

export default function Footer() {
  return (
    <div className="bg-[#1d1d1f]">
    
      {/* <div className="max-w-7xl mx-auto pl-40 border-b">  */}
        <nav className="flex items-center gap-2 pl-40 py-1">
          <a href="#" className=" #FFFFFFCC text-[12px] hover:underline">
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
          {/* <img src={appleSvg} alt="iPhone 16 Pro" className="w-8 h-8 ml-2" /> */}
        </nav>
      {/* </div> */}

      {/* Main Footer */}
      <footer className="max-w-7xl mx-0 pl-40 pt-3 py-12  text-[12px]">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-12  text-[12px]">
         {/* Shop and Learn */}
         <div className="space1">

        
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
          <div className="mr-10 fontweight:400  mt-5 mb-0.5">
          <FooterSection title="Apple Wallet">
            <FooterLink>Wallet</FooterLink>
          </FooterSection>
          </div>
          </div>
          {/* Account */}
          <div className="space2">

       
          <FooterSection title="Account">
           
            <FooterLink>Manage Your Apple Account</FooterLink>
            <FooterLink>Apple Store Account</FooterLink>
            <FooterLink>iCloud.com</FooterLink>
          </FooterSection>
          <div className="mr-10   mt-5 mb-0.5">
          <FooterSection title="Entertainment">
            <FooterLink>Apple One</FooterLink>
            <FooterLink>Apple TV+</FooterLink>
            <FooterLink>Apple Music</FooterLink>
            <FooterLink>Apple Aracade</FooterLink>
            <FooterLink>Apple Podcasts</FooterLink>
            <FooterLink>Apple Books</FooterLink>
            <FooterLink>Apple Store</FooterLink>
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

          {/* For Business */}
          <div className="space3">
          <FooterSection title="For Business">
            <FooterLink>Apple and Business</FooterLink>
            <FooterLink>Shop for Business</FooterLink>
            </FooterSection>
            <div className="mr-10   mt-5 mb-0.5">
            <FooterSection title="For Education">
            <FooterLink>Apple and Education</FooterLink>
            <FooterLink>Shop for University</FooterLink>
           
          </FooterSection>
          </div>
          <div className="mr-10   mt-5 mb-0.5">
            <FooterSection title="For Healthcare">
            <FooterLink>Apple in Healthcare</FooterLink>
            <FooterLink>Health on Apple Watch</FooterLink>
           
          </FooterSection>
          </div>
         
          </div>
          
     

          {/* Apple Values */}
          <div className="space4">

        
          <FooterSection title="Apple Values">
            <FooterLink>Accessibility</FooterLink>
            <FooterLink>Education</FooterLink>
            <FooterLink>Environment</FooterLink>
            <FooterLink>Privacy</FooterLink>
            <FooterLink>Supplier Responsibility</FooterLink>
          </FooterSection>
          <div className="mr-10   mt-5 mb-0.5">
          <FooterSection title="About Apple">
            <FooterLink>Newsroom</FooterLink>
            <FooterLink>Apple Leadership</FooterLink>
            <FooterLink>Career Opportunities</FooterLink>
            <FooterLink>investors</FooterLink>
            <FooterLink>Ethics & Compliance</FooterLink>
            <FooterLink>Events</FooterLink>
            <FooterLink>Contact Apple</FooterLink>
           
          </FooterSection>
          </div>
          
        </div>
        </div>

        {/* Store Locator */}
        <div className="text-[12px] text-gray-400 mb-4">
          More ways to shop: <a href="#" className="text-blue underline">Find an Apple Store</a> or <a href="#" className="text-blue underline">other retailer</a> near you. Or call 0008000 040 1966.
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-2 mr-2">
          <div className="flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-400 pl-0 pr-500 ">
            <div className="mb-1 md:mb-0">
              <span>Copyright © 2024 Apple Inc. All rights reserved.</span>
            </div>
            <div className="flex flex-wrap gap-4 ">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="hover:underline">Terms of Use</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="hover:underline">Sales Policy</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="hover:underline">Legal</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="hover:underline">Site Map</a>
            </div>
            <div className="mt-4 md:mt-0">
              <span>India</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}