import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './slices/headerSlice';
import dropdownReducer from './slices/dropdownSlice';

const createStore = () =>
	configureStore({
		reducer: {
			header: headerReducer,
			dropdown: dropdownReducer,
		},
	});

const Root: ReturnType<typeof createStore> = null;
export type RootState = ReturnType<typeof Root.getState>;
export type AppDispatch = typeof Root.dispatch;

export default createStore;
