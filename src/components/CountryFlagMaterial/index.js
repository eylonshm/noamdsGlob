import * as THREE from 'three'
import { getCountryFlagSvg } from '../../utils'

const createCountryFlagMaterial = (countryCode) => {
  const countryFlagSVG = getCountryFlagSvg(countryCode)
  const texture = new THREE.TextureLoader().load(countryFlagSVG)
  const material = new THREE.MeshStandardMaterial({ map: texture })
  return material
}

export default createCountryFlagMaterial
