import React from "react";

export default ({ currency, amountInSEK }) => (
  <div className="currency-item">
    <div className="detail">
      <div className="label">{`${currency.name} (${currency.code})`}</div>
      <div className="value">{`1 SEK => ${currency.oneSEK} ${currency.code}`}</div>
    </div>
    <div className="conversion">
      <div className="amount">{`${Number(
        amountInSEK
      ).toLocaleString()} SEK`}</div>
      <div className="equal">=</div>
      <div className="amount">{`${Number(
        (amountInSEK * currency.oneSEK).toFixed(2)
      ).toLocaleString()} ${currency.code}`}</div>
    </div>
  </div>
);
