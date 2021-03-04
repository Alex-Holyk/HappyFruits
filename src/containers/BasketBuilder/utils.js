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
  return total - oldPrice + newPrice;
};

export { mapProductsToObject, getItemsByType, calculateTotal };
