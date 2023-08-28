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
      {/* <a href="https://www.linkedin.com/in/eylonshm" target="_blank" rel="noreferrer">
      <img src='/assets/logo.svg' style={{position: 'fixed', left: '1rem', top: '1rem', cursor: 'pointer', height: '4rem'}} alt=""/>
      </a> */}
    </div>
  )
}

export default App
