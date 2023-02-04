import { configureStore } from "@reduxjs/toolkit";
import missionsReducer from "./mission/Misson";
import rocketsReducer from "./rockets/Rockets"


const rootreducer = {
  missions: missionsReducer,
  rockets: rocketsReducer,
};

const store = configureStore({
  reducer: rootreducer,
});

export default store;