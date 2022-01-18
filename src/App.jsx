import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import SingleMovie from './SingleMovie';

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/movies/:id" element={<SingleMovie />} />
      </Routes>
   );
};

export default App;
