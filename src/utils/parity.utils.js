const getOddArray = (array) => {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.filter((item, index) => {
    return index % 2;
  });

};
const getEvenArray = (array) => {
  if (!Array.isArray(array)) {
    return [];
  }

  return array.filter((item, index) => {
    return !(index % 2);
  });
};

export {
  getOddArray,
  getEvenArray
};
