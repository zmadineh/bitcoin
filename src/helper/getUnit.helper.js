const unitConvert = [
    {id: 'dollar', en: 'dollar', fa: 'دلار'},
    {id: 'tether', en: 'tether', fa: 'تتر'},
    {id: 'toman', en: 'toman', fa: 'تومان'},
]

export const getUnit = (unit) => {
    return unitConvert.filter(item =>  item.id === unit)[0].fa
}