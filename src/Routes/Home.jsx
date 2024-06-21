import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../Components/utils/global.context';
import Card from '../Components/Card';
import '../index.css';

const fetchDentists = async (dispatch) => {
  try {
    const response = await fetch('https://api.example.com/dentists');
    const data = await response.json();
    
    dispatch({ type: 'FETCH_DENTISTS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_DENTISTS_ERROR', payload: error.message });
  }
};

const Home = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    if (state.data.length === 0) {
      fetchDentists(dispatch);
    }
  }, [state.data, dispatch]);

  if (state.loading) {
    return <div>Loading...</div>;
  }

  if (state.error) {
    return <div>Error: {state.error}</div>;
  }

  return (
    <div >
      <h1>Home</h1>
      <div className="card-grid">
        {state.data.map(dentist => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id}/>
        ))}
      </div>
    </div>
  );
};

export default Home;






