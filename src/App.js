import logo from './logo.svg';
import './App.css';
import React from 'react'
import { createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {helloSaga} from './sagas'
import Counter from './Counter'
import counter from './reducers'


const sagaMiddleware = createSagaMiddleware()
console.log(counter)
const store = createStore(
  counter,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(helloSaga)

const action = type => store.dispatch({type})

function App() {
  return (
    <div className="App">
      <Counter 
        value={store.getState()}
        onIncrement={() => action('INCREMENT')}
        onDecrement={() => action('DECREMENT')}
      />
    </div>
  );
}

store.subscribe(App)
export default App;
