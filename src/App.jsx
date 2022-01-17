import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/movies/:id" element={<Movies />} />
      </Routes>
   );
};

export default App;
