import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { a } from '../reducers/Combinereducer';

export default createStore(reducer, composeWithDevTools());
