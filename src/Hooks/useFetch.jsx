import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_ENDPOINT } from '../context';

const useFetch = (urlParams) => {
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState({ show: false, message: '' });
   const [data, setData] = useState([]);

   const fetchMovies = async (url) => {
      setIsLoading(true);
      try {
         const { data } = await axios.get(url);
         if (data.Response === 'True') {
            setData(data.Search || data);
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
      fetchMovies(`${API_ENDPOINT}&s=${urlParams}`);
   }, [urlParams]);

   return { data, error, isLoading };
};

export default useFetch;
