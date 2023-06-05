import React, { useEffect } from "react";
import "./Hero.css";
import Coding from "./coding.svg";
import { useState } from "react";
import {HiCode } from "react-icons/hi";


export const Hero = () => {

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // });
  // const [showModal, setShowModal] = useState(false);

  // const handleContestAlertClick = () => {
  //   setShowModal(!showModal);
  // };

  // Aos.init();
  return (
    <section className="hero_wrapper"
          data-aos="zoom-in-down"
          data-aos-delay="10"
          data-aos-duration="10"
          data-aos-easing="ease-out"
          data-aos-mirror="false"
          data-aos-once="false"
    >
      <div className="hero_left">
        <h1
          className="hero_main_title"
          
        > 
          NITJSR
        </h1>
        <p className="hero_slogan"> <HiCode className="inline"/> Dream Code Conquer <HiCode className="inline"/></p>
          {/* <div className="hero_info rounded">
          <span className="rounded" onClick={handleContestAlertClick}>Contest Alert !</span>
        </div> */}
      </div>
      <div
        className="hero_right"
        
      >
        <img className="hero_img" src={Coding} alt="" />
      </div>
      {/* <div className={ `hero_modal ${showModal ? '' : 'hidden'}`} >
        <p>This is the modal content</p>
      </div>  */}
    </section>
  );
};
