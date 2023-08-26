import Globe from 'globe.gl'
import { useEffect } from 'react'

const GlobeWrapper = () => {
  const N = 300
  const gData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: Math.random() / 3,
    color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)],
  }))

  useEffect(() => {
    Globe()
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
      .pointsData(gData)
      .pointAltitude('size')
      .pointColor('color')(document.getElementById('globe'))
  }, [])

  return <div id='globe' />
}

export default GlobeWrapper
