import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(set => ({
    bears: 0,
    theme: 'light',
    increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
    toogleTheme: () => set(state => ({ theme: state.theme==='light'? 'dark': 'light' }))
}))

export const useFishStore = create(
    persist(
        (set, get) => ({
            fishes: 0,
            addFish: () => set({ fishes: get().fishes + 1 })
        }),
        {
            name: 'fishStore',
        }
    )
)