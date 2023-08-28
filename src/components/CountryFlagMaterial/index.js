import * as THREE from 'three';
import { getCountryFlagSvg } from '../../utils';

const createCountryFlagMaterial = (countryCode, countryPostal) => {
    const countryFlagSVG = getCountryFlagSvg(countryCode);
    console.log(countryCode, countryPostal);
    const map = new THREE.TextureLoader().load(
        countryFlagSVG ||
            `https://flagcdn.com/${countryPostal.toLowerCase()}.svg`
    );
    return new THREE.MeshStandardMaterial({ map });
};

export default createCountryFlagMaterial;
