import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface dropdownState {
	clickable: { shown: boolean };
	hover: { shown: boolean };
}

const initialState: dropdownState = {
	clickable: { shown: false },
	hover: { shown: false },
};

export const dropdownSlice = createSlice({
	name: 'dropdown',
	initialState,
	reducers: {
		setHoverVisible: (state, { payload }: PayloadAction<boolean>) => {
			state.hover.shown = payload;
		},
		showHoverDropdown: (state) => {
			state.hover.shown = true;
		},
		hideHoverDropdown: (state) => {
			state.hover.shown = false;
		},
		setClickableVisible: (state, { payload }: PayloadAction<boolean>) => {
			state.clickable.shown = payload;
		},
		showClickableDropdown: (state) => {
			state.clickable.shown = true;
		},
		hideClickableDropdown: (state) => {
			state.clickable.shown = false;
		},
	},
});

export const {
	setHoverVisible,
	showHoverDropdown,
	hideHoverDropdown,
	setClickableVisible,
	showClickableDropdown,
	hideClickableDropdown,
} = dropdownSlice.actions;

export default dropdownSlice.reducer;
