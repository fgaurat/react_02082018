import { Provider } from 'react-redux';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { store } from './storeTodoApp';

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
