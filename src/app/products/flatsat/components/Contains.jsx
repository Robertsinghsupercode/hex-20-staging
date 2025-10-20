import React from "react";
import Styles from "../css/contains.module.css";

export default function Contains() {
  return (
    <section className={`bg-color-3 ${Styles.containSec}`}>
      <div className="container-main">
        <h3 className={`heading-6 color-4 ${Styles.heading}`}>Flatsat contains</h3>
        <div className={`flex flex-row ${Styles.containWrapper}`}>
          <div className={`flex flex-column gap-40 ${Styles.points}`}>
            <p className="text-1 color-4 flex items-center gap-20">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
              </svg>
              1 * COMMAND & DATA HANDLING BOARD (CDH)
            </p>
            <p className="text-1 color-4 flex items-center gap-20">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
              </svg>
              1 * ELECTRICAL POWER SYSTEM (EPS)  
            </p>
            <p className="text-1 color-4 flex items-center gap-20">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
              </svg>
              1 * GROUND STATION SIMULATOR (UHF) 
            </p>

          </div>
          <div className={`flex flex-column gap-30`}>
            <p className="text-1 color-4 flex items-center gap-20">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
              </svg>
              1 * TRANSCEIVER BOARD (UHF)
            </p>
            <p className={`text-1 color-4 flex gap-20 ${Styles.point}`}>
              <svg className={`flex ${Styles.svgArrow}`} xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
              </svg>
              1* BATTERY BOARD (4X BATTERY HOLDER) - EXTENDABLE UP TO 2 BOARDS 
            </p>
            <p className="text-1 color-4 flex gap-20 width-70">
              <svg className={`flex ${Styles.svgArrow}`} xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
              </svg>
              1* PROTOBOARD (GENERIC BOARD FOR PROTOTYPING)
            </p>

          </div>

        </div>
      </div>

      
    </section>
  );
}
