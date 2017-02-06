import { fork } from 'redux-saga/effects';
//Import all sagas
import todos from './todos';
import blogs from './blogs'; 

export default function* root() {
  yield fork(todos);
  yield fork(blogs); 
  //Fork and yield other sagas here if you have more
}
