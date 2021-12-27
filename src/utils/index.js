import { useEffect, useState } from "react";

export const cleanObject = object => {
  const result = { ...object };
  Object.keys(object).forEach(
    (k) => {
      const v = object[k];
      if (v !== 0 && !v) delete result[k];
    }
  );
  return result;
};


export const useMount = (callback) => {
  useEffect(() => callback(), []);
};


// export const debounce = (func, delay) =>{
//   let timeout;
//   return (param)=>{
//     if(timeout) clearTimeout(timeout);
//     timeout = setTimeout(()=>{
//       func(...param);
//     },delay)
//   }
// }

export const useDebounce = (value, delay) => {
  const [deboucedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return deboucedValue;
};