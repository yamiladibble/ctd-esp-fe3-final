import React, {useContext} from 'react';
import { GlobalContext } from '../Components/utils/global.context';
import Card from '../Components/Card';

const Favs = () => {
  const { state } = useContext(GlobalContext);
  const { favorites } = state;

  return (
    <div className={`favs-page ${state.theme}`}>
      <h2>Dentists Favourites</h2>
      <div className="card-grid">
        {favorites.length > 0 ? (
          favorites.map((dentist) => (
            <Card key={dentist.id} id={dentist.id} name={dentist.name} username={dentist.username} />
          ))
        ) : (
          <p>No favourite dentists added.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
