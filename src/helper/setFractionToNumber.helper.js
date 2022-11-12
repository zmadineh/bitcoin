import {financialHelper} from "./financial.helper";

export const setFractionToNumber = (data, dataType) => {
    if(dataType === 'price')
        if(data < 0.01)
            return financialHelper(data, 8)
        else
            return financialHelper(data, 2)
    else if(dataType === 'percentage')
        return financialHelper(data, 3)
}