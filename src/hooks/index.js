import React, {useState} from 'react';

const useInput = ({ type, defaultValue }) => {
  const [value, setValue] = useState(defaultValue || "");
  const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
  return [value, input];
}

export {useInput}