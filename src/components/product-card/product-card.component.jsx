import './product-card.styles.scss';

import Button from '../button/button.component';

const ProductCard = ({ product }) => {
  const { name, places, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="places">{places}</span>
      </div>
      <Button buttonType="inverted">Reserveer nu</Button>
    </div>
  );
};

export default ProductCard;
