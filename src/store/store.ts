import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projectSlice';

const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
