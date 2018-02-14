const isArray = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

const recursivelyLowercaseJSONKeys = (obj) => {
  const copyOfObj = obj;
  if (typeof copyOfObj !== 'object' || copyOfObj === null) {
    return copyOfObj;
  }
  if (isArray(copyOfObj)) {
    return copyOfObj.map(o => recursivelyLowercaseJSONKeys(o));
  }
  return Object.keys(copyOfObj).reduce((prev, curr) => {
    prev[curr.toLowerCase()] = recursivelyLowercaseJSONKeys(copyOfObj[curr]);
    return prev;
  }, {});
};

module.exports = recursivelyLowercaseJSONKeys;
