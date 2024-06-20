import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Components/utils/global.context';
import '../index.css';

const Card = ({ id, name, username }) => {
  const {  dispatch } = useContext(GlobalContext);

  const addFav = () => {
    let favs = JSON.parse(localStorage.getItem('favs')) || [];
    favs.push({ id, name, username });
    localStorage.setItem('favs', JSON.stringify(favs));

    dispatch({ type: 'ADD_TO_FAVORITES', payload: { id, name, username } });
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <img src={`/images/doctor.jpg`} alt="Doctor" className="card-image" />
        <h3>{name}</h3>
        <p>{username}</p>
      </Link>
      <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;





