import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Shimer } from "./ui/Shimer";
import CurrencySelect from "./CurrencySelect";

const ConverterForm = () => {

    const [fromCurrency, setFormCurrency] = useState("USD")
    const [toCurrency, setToCurrency] = useState("INR")
    const handleSwapCountries = () => {
        setFormCurrency(toCurrency)
        setToCurrency(fromCurrency)
    }

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
            <CurrencySelect
              selectedCurrency={fromCurrency}
              handleCurrency={(e) => setFormCurrency(e.target.value)}
            />
          </div>

          <div
            className="swap-icon"onClick={handleSwapCountries}
            style={{ color: "#ffffff", fontSize: "25px" }}
          >
            <FontAwesomeIcon icon={faArrowRightArrowLeft} />
          </div>

          {/* to  */}
          <div className="form-section">
            <label className="form-label">To</label>
            <CurrencySelect
              selectedCurrency={toCurrency}
              handleCurrency={(e) => setToCurrency(e.target.value)}
            />
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
