import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const darkMode = atomWithStorage('darkMode', false)
export const textAtom = atom('hello jotai')
export const counter = atom(0)
export const uppercase = atom(
    (get) => get(textAtom).toUpperCase()
)