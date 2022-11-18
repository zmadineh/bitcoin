// converts number to string representation with K and M.
// toFixed(d) returns a string that has exactly 'd' digits
// after the decimal place, rounding if necessary.
export const numFormatter = (num) => {
    console.log(num)
    if(num > 999 && num < 1000000){
        return Number((num/1000).toFixed(1)).toLocaleString() + 'K'; // convert to K for number from > 1000 < 1 million
    }else if(num > 1000000){
        return Number((num/1000000).toFixed(1)).toLocaleString() + 'M'; // convert to M for number from > 1 million
    }else if(num < 900){
        return Number(num).toLocaleString(); // if value < 1000, nothing to do
    }
}
// Number(coin.market_cap).toLocaleString()