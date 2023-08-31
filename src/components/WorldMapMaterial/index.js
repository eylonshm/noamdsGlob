import * as THREE from 'three'

const createWorldMapMaterial = () => {
  const map = new THREE.TextureLoader().load(
    'https://besthqwallpapers.com/3d-graphics/3d-political-world-map-4k-blue-brickwall-map-of-world-countries-creative-187657',
  )
  return new THREE.MeshStandardMaterial({ map })
}

export default createWorldMapMaterial
