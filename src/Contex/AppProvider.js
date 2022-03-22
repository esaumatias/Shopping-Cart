import React, { useState, useEffect } from 'react';
import AppContext from './AppContex';
const { getByProducts, getByCategories } = require('../services/fetchApi');

function AppProvider({ children }) {
  const [categories, setCategories,] = useState([]);
  const [product, setProduct] = useState([]);
  const [selectCategory, setSelectCategory] = useState('Acessórios para Veículos');

  useEffect(() => {
    async function categories() {
      const category = await getByCategories();
      setCategories(category);
    }
    categories();
  }, [setCategories])

  useEffect(() => {
    async function products(categoria) {
      const products = await getByProducts(categoria);
      setProduct(products.results);
    }
    const productSelected = selectCategory;
    products(productSelected)
  }, [product, selectCategory, setProduct])


  return (
    <AppContext.Provider
      value={{
        categories,
        setCategories,
        product,
        setProduct,
        selectCategory,
        setSelectCategory,
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;