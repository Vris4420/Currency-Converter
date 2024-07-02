import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Shimer } from "./ui/Shimer";
import CurrencySelect from "./CurrencySelect";
import axios from 'axios'

const ConverterForm = () => {
  const [fromCurrency, setFormCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [amount, setAmonut] = useState(100);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSwapCountries = () => {
    setFormCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };
 
  const getExchangeRate =  () => {
    // const API_KEY = import.meta.env.VITE_API_KEY;
    setLoading(true)
    axios
      .get(
        ` https://v6.exchangerate-api.com/v6/d87fd759d6c93bb5a88b05d6/pair/${fromCurrency}/${toCurrency}`
      )
      .then((data) => {
        const rate = (data.data.conversion_rate * amount).toFixed(2);
        setResult(`${amount} ${fromCurrency} = ${rate} ${toCurrency}`);
        console.log(rate);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    getExchangeRate();
  };
  useEffect(() => getExchangeRate, [])

  return (
    <>
      <form className="converter-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label className="form-label">Enter Amount</label>
          <input type="number" className="form-input" value={amount} onChange={e => setAmonut(e.target.value)} required />
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
            className="swap-icon"
            onClick={handleSwapCountries}
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

        <p className={` ${loading ? "loading" : ''} exchange-rate-result`}>
          {loading ? ". . ." :  result}
        </p>
      </form>
    </>
  );
};

export default ConverterForm;
