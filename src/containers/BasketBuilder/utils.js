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

export { mapProductsToObject, getItemsByType };
