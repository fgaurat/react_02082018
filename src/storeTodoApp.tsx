import rootReducer from './reducers'
import { createStore } from '../node_modules/redux';


export const store = createStore(rootReducer)