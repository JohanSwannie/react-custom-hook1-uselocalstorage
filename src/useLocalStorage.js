import { useState, useEffect } from "react";

const getValue = (key, defaultValue) => {
  let returnArray = JSON.parse(localStorage.getItem(key));
  if (returnArray) {
    return returnArray;
  }
  if (defaultValue instanceof Function) {
    return defaultValue();
  }
  return defaultValue;
};

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getValue(key, defaultValue);
  });

  useEffect(() => {
    return localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
