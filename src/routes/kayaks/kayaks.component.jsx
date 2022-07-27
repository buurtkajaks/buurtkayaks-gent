import { useContext, Fragment } from 'react';

import { ProductsContext } from '../../contexts/products.context';

import KayakCard from '../../components/kayak-card/kayak-card.component';

import './kayaks.styles.scss';

const Kayaks = () => {
  const { productsMap } = useContext(ProductsContext);
  return (
    <Fragment>
      {Object.keys(productsMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="kayaks-container">
            {productsMap[title].map((kayak) => (
              <KayakCard id={kayak.id} kayak={kayak} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Kayaks;
