"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./AuroraContent";

export function Aurora() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center  "
      >
        
          <h2 className="converter-title">Curreny Converter</h2>

          <form className="converter-form">
            <div className="form-group">
              <label className="form-label">Enter Amount</label>
              <input type="number" className="form-input" required />
            </div>

            {/* from  */}
            <div className="form-group form-currency-group">
              <div className="form-section">
                <label className="form-label">From</label>
                <div className="currency-select">
                  <img src="https://flagsapi.com/US/flat/64.png" alt="Flag" />
                  <select className="currency-dropdown">
                    <option value="USD" selected>
                      USD
                    </option>
                    <option value="INR">INR</option>
                    <option value="NPR">NPR</option>
                  </select>
                </div>
              </div>

              <div
                className="swap-icon"
                style={{ color: "#ffffff", fontSize: "25px" }}
              >
                <FontAwesomeIcon icon={faArrowRightArrowLeft} />
              </div>

              {/* to  */}
              <div className="form-section">
                <label className="form-label">To</label>
                <div className="currency-select">
                  <img src="https://flagsapi.com/IN/flat/64.png" alt="Flag" />
                  <select className="currency-dropdown">
                    <option value="USD">USD</option>
                    <option value="INR" selected>
                      INR
                    </option>
                    <option value="NPR">NPR</option>
                  </select>
                </div>
              </div>
            </div>

            <button type="submit" className="submit-button">
              Get Exchange Rate
            </button>

            <p className="exchange-rate-result">1 usd = 80 inr</p>
          </form>
        
      </motion.div>
    </AuroraBackground>
  );
}
