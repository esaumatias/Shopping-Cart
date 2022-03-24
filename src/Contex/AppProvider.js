import React, { useState, useEffect } from 'react';
import AppContext from './AppContex';
import { getByProducts, getByCategories } from '../services/fetchApi';

function AppProvider({ children }) {
  const [categories, setCategories,] = useState([]);
  const [product, setProduct] = useState([]);
  const [selectCategory, setSelectCategory] = useState('Acessórios para Veículos');
  const [carItens, setCarItens] = useState([]);
  const [priceCart, setPriceCart] = useState(0);

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
  }, [selectCategory])


  return (
    <AppContext.Provider
      value={{
        categories,
        setCategories,
        product,
        setProduct,
        selectCategory,
        setSelectCategory,
        carItens,
        setCarItens,
        priceCart,
        setPriceCart,
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;