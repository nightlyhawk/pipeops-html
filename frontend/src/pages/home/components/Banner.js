import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner-section">
      <div className="banner-inner">
        <h1 className="headerTex">
          <span className="standOut">Beyond Horizon;</span> Keeping your staff
          on top of things
        </h1>
        <p className="bodyText">
          A platform to keep everyone in the loop and up to date while promoting
          collaboration and communication. Get started with our products today!
        </p>
        <div className="flex-btn">
          <a className="btn-1">See pricing</a>
          <a className="btn-2">
            Learn more{" "}
            <svg
              className="w-8 h-8 arrow"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="jumbotron">
        <div className="flex-contents">
          <div className="first">
            <h2 className="hd-1">
              Making academic excellent a priority for all
            </h2>
          </div>
          <div className="second">
            <h2 className="hd-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra,
              sed hendrerit fusce placerat vitae amet id magna aenean, Praesent
              ipsum posuere.
            </h2>
          </div>
        </div>
        <div className="imageContainer">
          <img
            src="bg.png"
            className="bigImage"
            alt="screenshot of purplebots dashboard"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Banner;
