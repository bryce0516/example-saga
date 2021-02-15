// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { store } from "./store";
import { Provider} from "react-redux";
import Counter1 from './counter/index'
const App = () => {


  return (
    <Provider store={store}>
        <div>
          this is app
        </div>
        <Counter1 />
    </Provider>
  )
}

export default App;
