const mapProductsToObject = (productsArray) => {
  if (!productsArray) {
    return {};
  }

  return productsArray.reduce((mappedObject, item) => {
    mappedObject[item.id] = item;
    return mappedObject;
  }, {});
};

const getDefaultBasket = (productsArray) => {
  const baskets = productsArray.filter((item) => item.type === 'Basket');
  return baskets[0].id;
};

export { mapProductsToObject, getDefaultBasket };
