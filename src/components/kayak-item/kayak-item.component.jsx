import './kayak-item.styles.scss';

const KayakItem = ({ kayak }) => {
  const { title, places, imageUrl } = kayak;
  return (
    <div className="kayak-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="kayak-body-container">
        <h2>
          {title} ({places}p)
        </h2>
        <p>Reserveer nu</p>
      </div>
    </div>
  );
};

export default KayakItem;
