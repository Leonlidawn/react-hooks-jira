export const cleanObject = object =>{
  const result = {...object};
  Object.keys(object).forEach(
    (k)=>{
      const v = object[k];
      if(v !== 0 && !v) delete result[k];
    }
  )
  return result;
}