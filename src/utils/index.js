import { findFlagUrlByIso3Code } from 'country-flags-svg'

export const getCountryFlagSvg = (countryISO3Code) =>
  findFlagUrlByIso3Code(countryISO3Code)
