import React from 'react';
import { footerLinks } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f7] text-[#6e6e73] text-xs py-5 px-5 sm:px-10">
      <div className="max-w-screen-lg mx-auto">
        {/* Shopping Options */}
        <div className="pb-2 border-b border-gray-300">
          <p className="text-center sm:text-left">
            More ways to shop: {' '}
            <a className="underline text-blue-600 hover:text-blue-500">
              Find an Apple Store
            </a>{' '}
            or{' '}
            <a  className="underline text-blue-600 hover:text-blue-500">
              other retailer
            </a>{' '}
            near you. Or call 000800-040-1966.
          </p>
        </div>

        {/* Links and Copyright */}
        <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <p className="mb-2 sm:mb-0">© 2024 Apple Inc. All rights reserved.</p>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center sm:justify-start">
            {footerLinks.map((link, i) => (
              <React.Fragment key={link}>
                <p className="hover:underline">
                  {link}
                </p>
                {i !== footerLinks.length - 1 && <span className="mx-2 hidden sm:inline"> | </span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;