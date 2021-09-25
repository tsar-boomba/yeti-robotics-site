import create from 'zustand';

interface State {
	headerShown: boolean;
	showHeader: () => void;
	hideHeader: () => void;
	clickableDropdownShown: boolean;
	showClickableDropdown: () => void;
	hideClickableDropdown: () => void;
}

const useStore = create<State>((set) => ({
	headerShown: true,
	showHeader: () => set(() => ({ headerShown: true })),
	hideHeader: () => set(() => ({ headerShown: false })),
	clickableDropdownShown: false,
	showClickableDropdown: () => set(() => ({ clickableDropdownShown: true })),
	hideClickableDropdown: () => set(() => ({ clickableDropdownShown: false })),
}));

export default useStore;
