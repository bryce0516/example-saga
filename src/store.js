

// import { all, apply } from 'redux-saga/effects';

import { all } from "redux-saga/effects";
import { counterSaga } from "./modules/counter";
import { combineReducers, applyMiddleware,createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import counter from './modules/counter'
// const sagaMiddleware = createSagaMiddleware()

// const rootReducer = combineReducers({
  
// })

// const store = createStore(
//   rootReducer,
//   applyMiddleware(sagaMiddleware)
// )

// export default store

const rootReducer = combineReducers({ counter })
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

export function* rootSaga(){
  yield all([counterSaga()])
}

sagaMiddleware.run(rootSaga);
export default rootReducer;