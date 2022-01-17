import { createContext, useContext } from 'react';

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppContext = createContext();

const AppProvider = ({ children }) => (
   <AppContext.Provider value={'hello'}>{children}</AppContext.Provider>
);

export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
