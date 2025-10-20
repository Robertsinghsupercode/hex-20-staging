"use client";
import React, { useState } from "react";
import ScrambleText from "./ScrambleText";
import Styles from "./css/reafmore.module.css";

export default function ReadMore({ children }) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Convert children to array to handle multiple paragraphs
  const childrenArray = React.Children.toArray(children);

  return (
    <div className="flex width-100">
      <div className="flex flex-column">
        <div>
          {childrenArray.map((child, index) => {
            return expanded ? child : null;
          })}
        </div>

        <div className={`${Styles.readMoreBtnContainer} flex justify-start`}>
          <div type="button"
            Style={{ background: "transparent", border: "none", outline: "none" }}
            onClick={(e) => {
              e.preventDefault();
              setExpanded(!expanded);
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`${Styles["cta-btn"]} ${Styles["transprantBg"]}`}
          >

            <div className={`${Styles["text-arrow-container"]}`}>
            <span className={Styles["ctn-btn-text"]}>
              <ScrambleText text={expanded ? "Read Less" : "Read More"} trigger={hovered} />
            </span>
            <svg 
              className={`${Styles["svg-arrow-down"]} ${expanded ? Styles["rotated"] : ""}`}
              width="12"
              height="6"
              viewBox="0 0 12 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L5.99998 5L11 1" stroke="white" />
            </svg>
            </div>

            <svg
              className={Styles["svg-bg"]}
              width="310"
              height="56"
              viewBox="0 0 268 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                className={Styles["btn-border"]}
                d="M267.5 0.5V38.373L259.048 47.5H0.5V9.63672L9.74219 0.5H267.5Z"
                stroke="#fff"
              />
              <path
                className={Styles["btn-bg"]}
                d="M268 38.5697L259.266 48H0V9.42816L9.53761 0H268V38.5697Z"
                fill="transprant"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}