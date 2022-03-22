const axios = require('axios');

const getByCategories = async() => {
  const response = await axios.get("https://api.mercadolibre.com/sites/MLB");
  return response.data.categories;
}

const getByProducts = async(category) => {
  const response = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${category}`);
  return response.data;
}

module.exports = {
  getByCategories,
  getByProducts,
};
