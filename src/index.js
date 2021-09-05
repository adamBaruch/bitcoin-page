import react from 'react';
import reactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';
import reducer from './Reducers';
import { Provider } from 'react-redux';

const store = createStore(reducer);
reactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('#root')
)