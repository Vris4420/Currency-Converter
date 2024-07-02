import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Shimer } from "./ui/Shimer";
import CurrencySelect from "./CurrencySelect";

const ConverterForm = () => {
  return (
    <>
      <form className="converter-form">
        <div className="form-group">
          <label className="form-label">Enter Amount</label>
          <input type="number" className="form-input" required />
        </div>

        {/* from  */}
        <div className="form-group form-currency-group">
          <div className="form-section">
            <label className="form-label">From</label>
            <CurrencySelect />
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
            <CurrencySelect />
          </div>
        </div>

        {/* <button type="submit" className="submit-button">
              Get Exchange Rate
            </button> */}

        <Shimer />

        <p className="exchange-rate-result">1 usd = 80 inr</p>
      </form>
    </>
  );
};

export default ConverterForm;
