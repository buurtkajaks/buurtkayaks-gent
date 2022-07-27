import { useContext } from 'react';

import { KayaksContext } from '../../contexts/kayaks.context';

import KayakCard from '../../components/kayak-card/kayak-card.component';

import 

import './kayaks.styles.scss';

const Kayaks = () => {
  const { kayaks } = useContext(KayaksContext);
  return (
    <div className="kayaks-container">
      {kayaks.map((kayak) => (
        <KayakCard id={kayak.id} kayak={kayak} />
      ))}
    </div>
  );
};

export default Kayaks;
