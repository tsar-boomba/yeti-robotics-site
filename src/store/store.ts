import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './slices/headerSlice';

const createStore = () =>
	configureStore({
		reducer: {
			header: headerReducer,
		},
	});

const Root: ReturnType<typeof createStore> = null;
export type RootState = ReturnType<typeof Root.getState>;
export type AppDispatch = typeof Root.dispatch;

export default createStore;
