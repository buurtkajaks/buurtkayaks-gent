import { createContext, useState, useEffect } from 'react';

import { getCollectionAndDocuments } from '../utils/firebase/firebase.utils';

// enable this to initialize the products collection in firestore
// import PRODUCT_DATA from '../product-data';
// import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils';

export const ProductsContext = createContext({
  productsMap: {},
});

export const ProductsProvider = ({ children }) => {
  const [productsMap, setProductsMap] = useState({});

  // enable this to initialize the products collection in firestore
  // useEffect(() => {
  //   addCollectionAndDocuments('products', PRODUCT_DATA);
  // }, []);

  useEffect(() => {
    const getCollectionMap = async () => {
      const productsMap = await getCollectionAndDocuments('products');
      console.log(productsMap);
      setProductsMap(productsMap);
    };

    getCollectionMap();
  }, []);

  const value = { productsMap };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
