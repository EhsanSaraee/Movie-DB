import ReactDOM from 'react-dom';
import App from './App';
import AppProvider from './context';
import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
   <AppProvider>
      <App />
   </AppProvider>,
   rootElement
);
