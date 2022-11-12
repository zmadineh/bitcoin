export const setColorForPercentageType = data => {
    if (data === 0) return 'inherit'
    else if (data < 0) return 'error'
    else if (data > 0) return 'success'
}
