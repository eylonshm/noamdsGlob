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
      Globe()
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
        .polygonsData(countries.features)
        .polygonCapMaterial((feature) => {
          const countryCode = feature.properties.ISO_A3
          return createCountryFlagMaterial(countryCode)
        })
        .polygonLabel(
          ({ properties: d }) => ` 
            <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
            Population: <i>${d.POP_EST}</i>
          `,
        )(document.getElementById('globe'))
    })()
  }, [])

  return <div id='globe' />
}

export default GlobeWrapper
