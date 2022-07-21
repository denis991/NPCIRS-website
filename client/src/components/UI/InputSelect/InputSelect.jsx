import React from 'react';

function InputSelect() {
  return (
    <select className="ui compact selection dropdown">
      <option value="0100000000">Алтайский край</option>
      <option selected="" value="0300000000">Краснодарский край</option>
      <option value="0400000000">Красноярский край</option>
      <option value="0500000000">Приморский край</option>
      <option value="0700000000">Ставропольский край</option>
      <option value="0800000000">Хабаровский край</option>
      <option value="1000000000">Амурская область</option>
    </select>
  );
}

export default InputSelect;
