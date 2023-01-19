import './App.css'
import { useStore, useFishStore } from './store/zustand'

function App() {
  const theme = useStore(state => state.theme)
  function ToogleTheme() {
    const toogleTheme = useStore(state => state.toogleTheme)
    return <button onClick={toogleTheme}>toogleTheme</button>
  }

  function BearCounter() {
    const bears = useStore(state => state.bears)
    return <h1>We have {bears} bears in our zoo</h1>
  }

  function FishCounter() {
    const fishes = useFishStore(state => state.fishes)
    return <h1>We have {fishes} fishes in our aquarium</h1>
  }

  function BControls() {
    const increasePopulation = useStore(state => state.increasePopulation)
    return <button onClick={increasePopulation}>bear up</button>
  }

  function FControls() {
    const addFish = useFishStore(state => state.addFish)
    return <button onClick={addFish}>fish up</button>
  }

  return (
    <div className={`app ${theme}`}>
      <BearCounter />
      <FishCounter />
      <BControls />
      <FControls />
      <ToogleTheme />
    </div>
  )
}

export default App
