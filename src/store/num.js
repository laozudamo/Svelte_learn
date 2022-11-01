import { writable } from 'svelte/store';

function createNum() {
	const { subscribe, set, update } = writable(1);
	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
    set: () => set(12)
	};
}

export const num = createNum();