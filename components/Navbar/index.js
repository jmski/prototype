import React, { useState } from "react";

const navData = ["Home", "About", "Services", "Portfolio", "Contact"];
//const [toggle, setToggle] = useState(false);

const Navbar = () => {
  return (
    <div className="flex justify-between w-full items-center backdrop-blur-sm fixed z-10 px-4 py-8">
      <div>JON GELUA</div>
      <ul className="flex justify-center align-center list-none">
        {navData.map((link) => (
          <li className="px-4">{link}</li>
        ))}
      </ul>
      <button>Nav button</button>
      <div className="md:hidden">
        <ul className="">
          {navData.map((link) => (
            <li className="py-4">{link}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
