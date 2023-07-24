import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices';

const store = configureStore(rootReducer);

const App = () => {
  return <Provider store={store}>{/* ToDo 컴포넌트 사용 */}</Provider>;
};
