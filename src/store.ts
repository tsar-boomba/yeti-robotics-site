import create from 'zustand';

interface State {
	headerShown: boolean;
	showHeader: () => void;
	hideHeader: () => void;
	clickableDropdownShown: boolean;
	showClickableDropdown: () => void;
	hideClickableDropdown: () => void;
	windowDimensions: { windowWidth: number; windowHeight: number };
	setWindowDimensions: ({
		windowWidth,
		windowHeight,
	}: {
		windowWidth: number;
		windowHeight: number;
	}) => void;
}

const useStore = create<State>((set) => ({
	headerShown: true,
	showHeader: () => set(() => ({ headerShown: true })),
	hideHeader: () => set(() => ({ headerShown: false })),
	clickableDropdownShown: false,
	showClickableDropdown: () => set(() => ({ clickableDropdownShown: true })),
	hideClickableDropdown: () => set(() => ({ clickableDropdownShown: false })),
	windowDimensions: { windowWidth: 0, windowHeight: 0 },
	setWindowDimensions: ({ windowWidth, windowHeight }) =>
		set(() => ({ windowDimensions: { windowWidth, windowHeight } })),
}));

export default useStore;
