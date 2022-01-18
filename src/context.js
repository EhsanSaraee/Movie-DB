import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppContext = createContext();

const AppProvider = ({ children }) => {
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState({ show: false, message: '' });
   const [movies, setMovies] = useState([]);
   const [query, setQuery] = useState('');

   const fetchMovies = async (url) => {
      setIsLoading(true);
      try {
         const { data } = await axios.get(url);
         if (data.Response === 'True') {
            setMovies(data.Search);
            setError({ show: false, message: '' });
         } else {
            setError({ show: true, message: data.Error });
         }
         setIsLoading(false);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchMovies(`${API_ENDPOINT}&s=${query}`);
   }, [query]);

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
