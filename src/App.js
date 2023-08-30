import './App.css'
import Globe from './components/GlobeWrapper'
import { useState, lazy, Suspense } from 'react'
import Writer from './components/TypeWriter'
const CountryModal = lazy(() => import('./components/CountryModal'))

function App() {
  const [clickedCountry, setClickedCountry] = useState()

  const onModalExit = () => {
    setClickedCountry()
  }

  return (
    <div className='App'>
      <Globe setClickedCountry={setClickedCountry} />
      <Suspense>
        <CountryModal
          open={clickedCountry}
          handleClose={onModalExit}
          countryCode={clickedCountry}
        />
      </Suspense>
      <Writer />
      {/* <a href="https://www.linkedin.com/in/eylonshm" target="_blank" rel="noreferrer">
      <img src='/assets/logo.svg' style={{position: 'fixed', left: '1rem', top: '1rem', cursor: 'pointer', height: '4rem'}} alt=""/>
      </a> */}
    </div>
  )
}

export default App
