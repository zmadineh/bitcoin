const convertToNumber = (number, locales = 'ar-EG') => {
    return Number(number).toLocaleString(locales, {minimumFractionDigits: 1, maximumFractionDigits: 20});
}

export const financial = (x, fraction, locales = 'ar-EG') => {
    return convertToNumber(Number.parseFloat(x).toFixed(fraction), locales);
}
