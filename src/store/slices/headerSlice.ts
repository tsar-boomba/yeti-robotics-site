import { createSlice } from '@reduxjs/toolkit';

interface headerState {
	shown: boolean;
}

const initialState: headerState = {
	shown: true,
};

export const headerSlice = createSlice({
	name: 'header',
	initialState,
	reducers: {
		toggleVisibility: (state) => {
			state.shown = !state.shown;
		},
		showHeader: (state) => {
			state.shown = true;
		},
		hideHeader: (state) => {
			state.shown = false;
		},
	},
});

export const { toggleVisibility, showHeader, hideHeader } = headerSlice.actions;

export default headerSlice.reducer;
