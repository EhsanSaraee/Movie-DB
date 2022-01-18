import { createContext, useContext, useState } from 'react';
import useFetch from './Hooks/useFetch';

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppContext = createContext();

const AppProvider = ({ children }) => {
   const [query, setQuery] = useState('');
   const { error, isLoading, data: movies } = useFetch(`&s=${query}`);

   return (
      <AppContext.Provider
         value={{ movies, query, isLoading, error, setQuery }}
      >
         {children}
      </AppContext.Provider>
   );
};

export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
