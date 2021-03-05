const mapProductsToObject = (productsArray) => {
  if (!productsArray) {
    return {};
  }

  return productsArray.reduce((mappedObject, item) => {
    mappedObject[item.id] = item;
    return mappedObject;
  }, {});
};

const getItemsByType = (productsArray, type) => {
  const items = productsArray.filter((item) => item.type === type);
  return items;
};

const calculateTotal = (total, oldPrice, newPrice) => {
  return (total * 100 - oldPrice * 100 + newPrice * 100).toFixed() / 100;
};

export { mapProductsToObject, getItemsByType, calculateTotal };
