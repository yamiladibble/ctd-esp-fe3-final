import React, { createContext, useReducer, useEffect } from 'react';

const initialState = { theme: 'light', data: [], loading: true, error: null,  favorites: JSON.parse(localStorage.getItem('favs')) || [], };

const GlobalContext = createContext(initialState);

const globalReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    case 'FETCH_DENTISTS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_DENTISTS_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case 'FETCH_DENTISTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
      case 'ADD_TO_FAVORITES':
      const newFavorite = action.payload;
      const updatedFavorites = [...state.favorites, newFavorite];
      localStorage.setItem('favs', JSON.stringify(updatedFavorites)); 
      return { ...state, favorites: updatedFavorites };
    default:
      return state;
  }
};

const fetchDentists = async (dispatch) => {
  dispatch({ type: 'FETCH_DENTISTS_REQUEST' });
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
    const data = await response.json();
    dispatch({ type: 'FETCH_DENTISTS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_DENTISTS_FAILURE', payload: error.message });
  }
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    if (state.data.length === 0) {
      fetchDentists(dispatch);
    }
  }, [state.data]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider };
export  {GlobalContext} ;



