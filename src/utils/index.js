import { findFlagUrlByIso3Code } from 'country-flags-svg';

export const getCountryFlagSvg = (countryPostal) =>
    countryPostal === 'COD'
        ? `https://flagcdn.com/cd.svg`
        : findFlagUrlByIso3Code(countryPostal);
