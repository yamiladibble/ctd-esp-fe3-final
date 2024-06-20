import React, { useContext }  from 'react';
import { GlobalContext } from '../Components/utils/global.context';
import Form from '../Components/Form';
import '../index.css';

const Contact = () => {
  const { state } = useContext(GlobalContext);
  const { theme } = state;

  return (
    <div className={`contact ${theme}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
