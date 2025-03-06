import { configureStore } from '@reduxjs/toolkit';
import EventsReducer from '../Features/AllEvents';

const Store = configureStore({
  reducer: {
    events: EventsReducer,
  },
});

export default Store;
