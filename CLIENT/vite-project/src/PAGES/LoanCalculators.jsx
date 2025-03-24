import React from "react";

const LoanCalculators = () => {
  return (
    <section className="calculator-section">
      <div className="container" >
        <h2 className="title" style={{color:"white"}}>
          Loan <span style={{color:"white"}}>Calculators</span>
        </h2>
        <p className="description" style={{color:"white"}}>
          Use our smart calculators to estimate your loan amounts and plan your
          finances wisely.
        </p>

        <div className="calculator-cards">
          {/* Personal Loan Calculator */}
          <div className="card">
            <h3>PL Calculator</h3>
            <p>
              Calculate your personal loan payments and interest rates easily.
            </p>
            <button className="calculate-btn">Calculate Now</button>
          </div>

          {/* EMI Calculator */}
          <div className="card">
            <h3>EMI Calculator</h3>
            <p>Estimate your monthly EMI payments for any type of loan.</p>
            <button className="calculate-btn">Calculate Now</button>
          </div>

          {/* RD Calculator */}
          <div className="card">
            <h3>RD Calculator</h3>
            <p>Find out how much you can save with a Recurring Deposit (RD).</p>
            <button className="calculate-btn">Calculate Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculators;
