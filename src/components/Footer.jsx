import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue">Find an Apple Store </span>
            or <span className="underline text-blue">other retailer</span> near
            you.
          </p>
          <p className="font-semibold text-gray text-xs">
            or call 00800-040-1966
          </p>
        </div>

        <div className="flex items-center my-5">
          <div className="bg-neutral-700 h-[1px] flex-grow" />
        </div>

        <div className="flex flex-wrap justify-between items-center">
          <p className="font-semibold text-gray text-xs mr-8">
            Copyright © 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2">|</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
