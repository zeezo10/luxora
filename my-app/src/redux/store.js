import { configureStore } from '@reduxjs/toolkit';
import theme from './counter'; // Import the reducer, not the action

export const store = configureStore({
  reducer: {
    counter: theme,
  },
});
