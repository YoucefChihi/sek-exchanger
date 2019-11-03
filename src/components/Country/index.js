import React from 'react';
import InfoItem from './InfoItem';
import CurrencyItem from './CurrencyItem';

export default ({data, amountInSEK, onRemove}) => (
  <li className="country">
    <div className="remove" onClick={onRemove}>×</div>
    <div className="info">
      <InfoItem label="Name" value={data.name} />
      <InfoItem label="Population" value={data.population} />
    </div>
    <div className="currency">
      <div className="title">Currencies</div>
      {data.currencies.map ((currency, index) => (
        <CurrencyItem
          currency={currency}
          amountInSEK={amountInSEK}
          key={`currency-item-${index}`}
        />
      ))}
    </div>
  </li>
);
