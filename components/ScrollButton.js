
import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";


const ScrollButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 400) {
              setShowTopBtn(true);
          }
        
           else{
              setShowTopBtn(false);
          }
      });
  }, []);
        

  const goToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth",
      });
  };
  return (
      <div className="relative  ">
          {" "}
          {showTopBtn && (
              <FaAngleUp
                className="fixed  animate-bounce transition ease-in-out fill-yellow-500 lg:bottom-32 bottom-32 right-9  md:bottom-64 md:right-6 z-20 bg-transprant  h-8 w-8 lg:h-10  lg:w-10  md:h-4 md:w-4 cursor-pointer   hover:animate-none hover:fill-yellow-300 hover:-translate-y-1 hover:scale-110 "
                  onClick={goToTop}
              />
          )}{" "}
      </div>
  );
};
export default ScrollButton;




