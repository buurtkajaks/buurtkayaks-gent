import Directory from '../../components/directory/directory.component';

const Home = () => {
  const kayaks = [
    {
      id: 1,
      title: 'Kajak 1',
      places: 2,
      imageUrl:
        'https://www.kayakslavanne.be/wp-content/uploads/2014/04/kayak-semois-alle-biplace-soleil.jpg',
    },
    {
      id: 2,
      title: 'Kajak 2',
      places: 2,
      imageUrl:
        'https://pyxis.nymag.com/v1/imgs/7f1/3bb/b3177b1312e66d18df61305fb92d8dad06-kayaks-lede.rsocial.w1200.jpg',
    },
    {
      id: 3,
      title: 'Kajak 3',
      places: 2,
      imageUrl:
        'https://cdn.wbtourisme.be/sites/default/files/DESCENTE-DE-LA-LESSE.jpg',
    },
    {
      id: 4,
      title: 'Kajak 4',
      places: 1,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/b/b2/Sea_Kayak.JPG',
    },
    {
      id: 5,
      title: 'Kajak 5',
      places: 1,
      imageUrl:
        'https://www.divein.com/wp-content/uploads/Perception-Zip-9-6-sit-on-top-kayak-tested-on-water--1140x760.jpg',
    },
    {
      id: 6,
      title: 'Kajak 6',
      places: 2,
      imageUrl:
        'https://www.kayakslavanne.be/wp-content/uploads/2014/04/kayak-semois-alle-biplace-soleil.jpg',
    },
    {
      id: 7,
      title: 'Kajak 7',
      places: 2,
      imageUrl:
        'https://pyxis.nymag.com/v1/imgs/7f1/3bb/b3177b1312e66d18df61305fb92d8dad06-kayaks-lede.rsocial.w1200.jpg',
    },
    {
      id: 8,
      title: 'Kajak 8',
      places: 2,
      imageUrl:
        'https://cdn.wbtourisme.be/sites/default/files/DESCENTE-DE-LA-LESSE.jpg',
    },
  ];

  return <Directory kayaks={kayaks} />;
};

export default Home;
