const convertToNumber = (number) => {
    return Number(number).toLocaleString();
}

export const financialHelper = (x, fraction) => {
    return convertToNumber(Number.parseFloat(x).toFixed(fraction));
}
