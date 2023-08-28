import './App.css'
import { Globe } from './components'
import { useState } from 'react'
import CountryModal from './components/CountryModal'
import Writer from './components/TypeWriter'

function App() {
  const [clickedCountry, setClickedCountry] = useState()

  const onModalExit = () => {
    setClickedCountry()
  }

  return (
    <div className='App'>
      <Globe setClickedCountry={setClickedCountry} />
      <CountryModal open={clickedCountry} handleClose={onModalExit} />
      <Writer/>
    </div>
  )
}

export default App
