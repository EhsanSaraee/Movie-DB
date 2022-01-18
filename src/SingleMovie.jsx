import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_ENDPOINT } from './context';

const SingleMovie = () => {
   const { id } = useParams();
   const [movie, setMovie] = useState({});
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState({ show: false, message: '' });

   const fetchMovie = async (url) => {
      try {
         const { data } = await axios.get(url);
         if (data.Response === 'False') {
            setError({ show: true, message: data.Error });
            setIsLoading(false);
         } else {
            setMovie(data);
            setIsLoading(false);
         }
         setIsLoading(false);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchMovie(`${API_ENDPOINT}&i=${id}`);
   }, [id]);

   if (isLoading) {
      return <div className="loading"></div>;
   }
   if (error.show) {
      return (
         <div className="page-error">
            <h1>{error.message}</h1>
            <Link to="/" className="btn">
               Back to Movie List
            </Link>
         </div>
      );
   }
   const { Plot: plot, Poster: poster, Title: title, Year: year } = movie;
   return (
      <section className="single-movie">
         <img src={poster} alt={title} />
         <div className="single-movie-info">
            <h2>{title}</h2>
            <p>{plot}</p>
            <h4>{year}</h4>
            <Link to="/" className="btn">
               Back to Movie List
            </Link>
         </div>
      </section>
   );
};

export default SingleMovie;
