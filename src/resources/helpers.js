export default (object, keys) => {
  return keys.reduce((obj, key) => {
    if (object[key]) obj[key] = object[key];
       return obj;
     }, {});
};