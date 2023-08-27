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
      console.log('countries -> ', countries)
      Globe()
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
        .polygonsData(countries.features)
        .polygonCapColor(
          () =>
            `#${Math.round(Math.random() * Math.pow(2, 24))
              .toString(16)
              .padStart(6, '0')}`,
        )
        .polygonCapMaterial((feature) => {
          const countryCode = feature.properties.ISO_A3
          return createCountryFlagMaterial(countryCode)
        })
        // We should use polygonCapMaterial here to render a 3js material
        // which is a country flag image into the caps
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
