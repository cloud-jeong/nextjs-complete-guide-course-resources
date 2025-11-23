import { create } from "zustand";

interface CountStoreState {
	count: number;
	increment: () => void;
	decrement: () => void;
	reset: () => void;
	resetIfEven: () => void;
}

export const useCounterStore = create<CountStoreState>((set, get) => ({
	count: 0,
	increment: () => set((state) => ({ count: state.count + 1 })),
	decrement: () => set((state) => ({ count: state.count - 1 })),
	reset: () => set({ count: 0 }),
	resetIfEven: () => {
		const { count } = get();
		if (count % 2 === 0) {
			set({ count: 0 });
		}
	},
}));
