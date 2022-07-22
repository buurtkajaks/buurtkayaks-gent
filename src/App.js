const App = () => {

  const kayaks = [
    {
      id: 1,
      title: "Kajak 1",
      places: 2
    },
    {
      id: 2,
      title: "Kajak 2",
      places: 2
    },
    {
      id: 3,
      title: "Kajak 3",
      places: 2
    },
    {
      id: 4,
      title: "Kajak 4",
      places: 1
    },
    {
      id: 5,
      title: "Kajak 5",
      places: 1
    }
  ];

  return (
    <div className="kayaks-container">
      {kayaks.map(({title, places}) => (
        <div className="kayak-container">
          <div className="background-image" />
            <div className="kayak-body-container">
              <h2>{title}</h2>
              <p>{places}-persoons</p>
              <p>Reserveer nu</p>
            </div>      
        </div>
      ))}
    </div>
  );
}

export default App;
