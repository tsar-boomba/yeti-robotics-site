import create from 'zustand';

interface State {
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
	windowDimensions: { windowWidth: 0, windowHeight: 0 },
	setWindowDimensions: ({ windowWidth, windowHeight }) =>
		set(() => ({ windowDimensions: { windowWidth, windowHeight } })),
}));

export default useStore;
