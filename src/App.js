import './App.css'
import { Globe } from './components'
import { useState } from 'react'
import CountryModal from './components/CountryModal'

function App() {
  const [clickedCountry, setClickedCountry] = useState()

  const onModalExit = () => {
    setClickedCountry()
  }

  return (
    <div className='App'>
      <Globe setClickedCountry={setClickedCountry} />
      <CountryModal open={clickedCountry} handleClose={onModalExit} />
    </div>
  )
}

export default App
