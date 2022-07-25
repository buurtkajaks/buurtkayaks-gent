import './kayak-card.styles.scss';

import Button from '../button/button.component';

const KayakCard = ({ kayak }) => {
  const { name, places, imageUrl } = kayak;
  return (
    <div className="kayak-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="places">{places}</span>
      </div>
      <Button buttonType="inverted">Reserveer kayak</Button>
    </div>
  );
};

export default KayakCard;
