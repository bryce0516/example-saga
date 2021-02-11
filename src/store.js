import {applyMiddleware, combineReducers, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all, apply } from 'redux-saga/effects';


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  
})

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

export default store