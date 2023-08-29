import { findFlagUrlByIso3Code } from 'country-flags-svg';

export const getCountryFlagSvg = (countryPostal) =>
    countryPostal === 'COD'
        ? `https://flagcdn.com/cd.svg`
        : findFlagUrlByIso3Code(countryPostal);

export const wrapPromise = (promise) => {
    let status = 'pending';
    let response;

    const suspender = promise.then(
        res => {
        status = 'success';
        response = res;
        },
        err => {
        status = 'error';
        response = err;
        },
    );

    const handler = {
        pending: () => {
        throw suspender;
        },
        error: () => {
        throw response;
        },
        default: () => response,
    };

    const read = () => {
        const result = handler[status] ? handler[status]() : handler.default();
        return result;
    };

    return { read };
}
