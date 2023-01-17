import './App.css'
// import { useStore, useFishStore } from './store/zustand'
import { atom, useAtom } from 'jotai'
import { textAtom, counter, uppercase, darkMode } from './store/jotai'

const checkChange = atom(5)

function App() {

  // const theme = useStore(state => state.theme)
  // function ToogleTheme() {
  //   const toogleTheme = useStore(state => state.toogleTheme)
  //   return <button onClick={toogleTheme}>toogleTheme</button>
  // }

  // function BearCounter() {
  //   const bears = useStore(state => state.bears)
  //   return <h1>We have {bears} bears in our zoo</h1>
  // }

  // function FishCounter() {
  //   const fishes = useFishStore(state => state.fishes)
  //   return <h1>We have {fishes} fishes in our aquarium</h1>
  // }

  // function BControls() {
  //   const increasePopulation = useStore(state => state.increasePopulation)
  //   return <button onClick={increasePopulation}>bear up</button>
  // }

  // function FControls() {
  //   const addFish = useFishStore(state => state.addFish)
  //   return <button onClick={addFish}>fish up</button>
  // }

  const Input = () => {
    const [text, setText] = useAtom(textAtom)
    const handleChange = (e) => setText(e.target.value)
    const toUppercase = useAtom(uppercase)
    return (
      <>
        <input value={text} onChange={handleChange} />
        <h1>{toUppercase}</h1>
      </>
    )
  }

  const Counter = () => {
    const [count, setCount] = useAtom(counter)
    const handleChange = (e) => setCount(prev => prev + 1)
    return (
      <>
        <p>{count}</p>
        <button onClick={handleChange}>Up</button>
      </>
    )
  }

  const [theme, setTheme] = useAtom(darkMode)
  const ToogleTheme = () => {
    const handleChange = (e) => setTheme(!theme)
    return (
      <>
        <button onClick={handleChange}>toogle</button>
      </>
    )
  }

  const [value, setValue] = useAtom(checkChange)
  const [value1]= useAtom(checkChange)
  return (
    <div className={`app ${theme? 'dark': 'light'}`}>
      {/* <BearCounter />
      <FishCounter />
      <BControls />
      <FControls />
      <ToogleTheme /> */}

      <Input />
      <Counter />
      <ToogleTheme />

      <p>{value}</p>
      <p>{value1}</p>
      <button onClick={(e) => setValue(prev => prev * 2)}>Change</button>
    </div>
  )
}

export default App
