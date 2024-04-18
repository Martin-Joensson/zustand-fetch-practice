import { create } from "zustand"

export const useCountStore = create((set, get) => ({
    count: 0,
    increment: () => set(state => ({ count: state.count + 1 })),
    decrement: () => set(state => ({ count: state.count - 1 })),
    // reset: () => set({ count: 0 })
    reset: () => {
        console.log("Current count before reset: ", get().count);
        set({count: 0})
    }
}))