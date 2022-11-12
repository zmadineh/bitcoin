import {financial} from "./financial.helper";

export const setFractionToNumber = (data, dataType) => {
    if(dataType === 'price')
        if(data < 0.0001)
            return financial(data, 8)
        else if(data < 0.001)
            return financial(data, 4)
        else
            return financial(data, 3)
    else if(dataType === 'percentage')
        return financial((data < 0 ? data*-1 : data), 3)
}