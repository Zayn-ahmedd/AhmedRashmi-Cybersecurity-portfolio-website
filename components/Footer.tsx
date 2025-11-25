import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-100">
      <p className="text-center text-sm text-gray-500">
        © {currentYear} Ahmed Rashmi. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;