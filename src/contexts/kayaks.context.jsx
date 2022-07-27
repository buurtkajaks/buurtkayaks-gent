import { createContext, useState, useEffect } from 'react';

import { getCollectionAndDocuments } from '../utils/firebase/firebase.utils';

// enable this to initialize the products collection in firestore
// import PRODUCT_DATA from '../product-data';
// import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils';

export const KayaksContext = createContext({
  kayaks: [],
});

export const KayaksProvider = ({ children }) => {
  const [kayaks, setKayaks] = useState([]);

  // enable this to initialize the products collection in firestore
  // useEffect(() => {
  //   addCollectionAndDocuments('products', PRODUCT_DATA);
  // }, []);

  useEffect(() => {
    const getCollecionMap = async () => {
      const collectionMap = await getCollectionAndDocuments();
      console.log(collectionMap);
    };

    getCollecionMap();
  });

  const value = { kayaks };
  return (
    <KayaksContext.Provider value={value}> {children} </KayaksContext.Provider>
  );
};
