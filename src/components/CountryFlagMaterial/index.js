import * as THREE from 'three'

const createCountryFlagMaterial = (countryCode) => {
  const texture = new THREE.TextureLoader().load('/assets/ar.svg')
  const material = new THREE.MeshStandardMaterial()
  material.map = texture
  return material
}

export default createCountryFlagMaterial
