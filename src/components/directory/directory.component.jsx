import KayakItem from '../kayak-item/kayak-item.component';

import './directory.styles.scss';

const Directory = ({ kayaks }) => {
  return (
    <div className="directory-container">
      {kayaks.map((kayak) => (
        <KayakItem key={kayak.id} kayak={kayak} />
      ))}
    </div>
  );
};

export default Directory;
