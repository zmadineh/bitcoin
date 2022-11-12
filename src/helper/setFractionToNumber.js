import {financial} from "./financial";

export const setFractionToNumber = (data, dataType) => {
    if(dataType === 'price')
        if(data < 0.01)
            return financial(data, 8)
        else
            return financial(data, 2)
    else if(dataType === 'percentage')
        return financial(data, 3)
}