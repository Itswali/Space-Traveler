import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './mission/Misson';

const rootreducer = {
  missions: missionsReducer,
};

const store = configureStore({
  reducer: rootreducer,
});

export default store;
