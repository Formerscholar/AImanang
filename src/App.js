import React from 'react';
import BasicRoute from '@/router'
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BasicRoute/>
    </Provider>
  );
}

export default App;
