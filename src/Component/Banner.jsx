import React from "react";

import "./banner.css";

import img1 from "../assets/photo.jpeg";
import { Linkedin, Github, Envelope } from "react-bootstrap-icons";
const Banner = () => {
  return (
    <div className="top">
      <div className="  banner">
        <div className="d-flex flex-column gap-3 content">
          {/* <h3 className="custom-color">Hello !</h3> */}
          <h1 className="title">Full Stack Developer</h1>

          <p>
            I'm Samikshya Kharel. A passionate full-stack developer committed to
            crafting robust and user-centric web solutions from end to end.
          </p>
          {/* <div className=" info ">
            <button>Check My CV</button>
          </div> */}
          <div className="d-flex gap-4 mt-4 info">
            <a
              href="https://www.linkedin.com/in/samikshya-kharel-76197a1a0/"
              target="_blank"
            >
              <Linkedin size={40} color="#0b66c2" />
            </a>
            <a href="https://github.com/samikshya405" target="_blank">
              <Github size={40} color="orange" />
            </a>
            <a href="mailto: Samikshyakharel405@gmail.com">
              <Envelope size={40} color="#0b66c2" />
            </a>
          </div>
        </div>
        <div className="img-container">
          {/* <img src={img1} alt="my-image" /> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
