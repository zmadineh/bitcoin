const convertToNumber = (number) => {
    return Number(number).toLocaleString('ar-EG', {minimumFractionDigits: 1, maximumFractionDigits: 20});
}

export const financial = (x, fraction) => {
    return convertToNumber(Number.parseFloat(x).toFixed(fraction));
}
