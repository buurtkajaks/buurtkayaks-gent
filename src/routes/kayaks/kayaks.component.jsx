import { useContext } from 'react';

import { ProductsContext } from '../../contexts/products.context';

import KayakCard from '../../components/kayak-card/kayak-card.component';

import './kayaks.styles.scss';

const Kayaks = () => {
  const {} = useContext(ProductsContext);
  return <div className="kayaks-container"></div>;
};

export default Kayaks;

// {kayaks.map((kayak) => (
//   <KayakCard id={kayak.id} kayak={kayak} />
// ))}
