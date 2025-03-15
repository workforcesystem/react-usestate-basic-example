import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light text-center py-3" style={{marginTop: '60px'}}>
      <div className="container">
        <p className="mb-0">© {new Date().getFullYear()} Workforce Systems Movie App. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
