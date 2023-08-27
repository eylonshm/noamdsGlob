import * as THREE from 'three'
import { getCountryFlagSvg } from '../../utils'

const createCountryFlagMaterial = (countryCode) => {
  const countryFlag = getCountryFlagSvg(countryCode)
  const texture = new THREE.TextureLoader().load(countryFlag)
  const material = new THREE.MeshStandardMaterial({ map: texture })
  return material
}

export default createCountryFlagMaterial
