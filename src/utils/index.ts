import { useEffect, useState } from "react";

export const cleanObject = (object:{[key:string]:unknown}):Object => {
  const result = { ...object };
  Object.keys(object).forEach(
    (k:string) => {
      const v = object[k];
      if (!(v === null || v === undefined)) delete result[k];
    }
  );
  return result;
};


export const useMount = (callback:Function) => {
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

export const useDebounce = (value:any, delay?:number) => {
  const [deboucedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return deboucedValue;
};