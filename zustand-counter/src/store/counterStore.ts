import { create } from "zustand";

interface ICounterStore {
    count:number;
    title:string;
    increment: () => void;
}

export const useCounterStore = create<ICounterStore>((set, get) => ({
    cont: 5,
    title: "Contador: 11",
    increment: () => set(state => ({count: state.count + 1}))
}))