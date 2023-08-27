import Globe from 'globe.gl'
import { useEffect } from 'react'
import { _GeoJSONLoader as GeoLoader } from '@loaders.gl/json'
import countriesGeoJson from '../../datasets/countries.geojson'
import { load } from '@loaders.gl/core'
import createCountryFlagMaterial from '../CountryFlagMaterial'

const GlobeWrapper = () => {
  useEffect(() => {
    ;(async () => {
      const countries = await load(countriesGeoJson, GeoLoader)
      const globe = Globe()
      .backgroundImageUrl("//unpkg.com/three-globe/example/img/night-sky.png")
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
        .polygonsData(countries.features)
        .polygonCapMaterial((feature) => {
          const countryCode = feature.properties.ISO_A3
          return createCountryFlagMaterial(countryCode)
        })
        .polygonStrokeColor(() => "rgba(0, 0, 0, 0.2)")
        .polygonSideColor(() => "rgba(255, 255, 255, 0.02)")
        .polygonCapColor(false)
        .polygonLabel(
          ({ properties: d }) => `
            <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
            Population: <i>${d.POP_EST}</i>
          `,
        )(document.getElementById('globe'))

        globe.controls().autoRotate = true
        globe.controls().autoRotateSpeed = 0.2
    })()
  }, [])

  return <div id='globe'/>
}

export default GlobeWrapper
