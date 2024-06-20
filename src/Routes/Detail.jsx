import React, { useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../Components/utils/global.context';
import '../index.css';

const Detail = () => {
  const { id } = useParams();
  const { state, fetchDentists } = useContext(GlobalContext);
  const dentist = state.data.find(dentist => dentist.id === Number(id));

  useEffect(() => {
    if (state.data.length === 0) {
      fetchDentists();
    }
  }, [state.data, fetchDentists]);

  if (!dentist) {
    return <div>Loading...YD</div>;
  }

  return (
    <div className='table'>
      <h1>{dentist.name}</h1>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
};

export default Detail;