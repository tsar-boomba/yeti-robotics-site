import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './slices/headerSlice';

const createStore = () =>
	configureStore({
		reducer: {
			header: headerReducer,
		},
	});

const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default createStore;
