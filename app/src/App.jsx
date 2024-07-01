import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="currency-converter">
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

          <div className="swap-icon" style={{ color: "#ffffff", fontSize:'25px' }}>
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
    </div>
  );
}

export default App;
