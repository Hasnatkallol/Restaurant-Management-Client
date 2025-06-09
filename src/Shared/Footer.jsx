import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#29291F]">
      <span className="">
        {" "}
        <i>
          {" "}
          <h1 className="text-[#F3F1C4] text-4xl font-bold text-center py-10 lg:py-30">
            RestroFlow{" "}
          </h1>
        </i>
      </span>
      <div className="md:flex text-center lg:text-start items-center md:justify-around pb-10">
        <div>
          <p className="text-[#D2D0A9]">123-456-789</p>
          <p className="text-[#D2D0A9]">info@mysite.com</p>
          <p className="text-[#D2D0A9]">500 Terry Francine St.</p>
          <p className="text-[#D2D0A9]">San Francisco, CA 94158</p>
        </div>
        <div className="mt-5 md:mt-0">
          <p className="text-[#D2D0A9] ">Privacy Policy</p>
          <p className="text-[#D2D0A9] ">Accessibility Statement</p>
          <p className="text-[#D2D0A9] ">Terms & Conditions</p>
          <p className="text-[#D2D0A9] ">Refund Policy</p>
        </div>
      </div>
      <p className="text-[#F3F1C4] text-center pb-20">
        © 2035 by B for Buffet. Powered and secured by hasnat{" "}
      </p>
    </div>
  );
};

export default Footer;
