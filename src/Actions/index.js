import react from 'react';

export const getCoin = coinName => {
    return {
        type: 'GET_COIN',
        payload: coinName
    }
}
export const chooseTable = coinName => {
    return {
        type: 'CHOOSE_TABLE',
        payload: coinName
    }
} 
export const searchSubCoin = subName => {
    return {
        type: 'SEARCH_SUB_COIN',
        payload: subName
    }
}
export const resetTable = () => {
    return {
        type: 'RESET_TABLE'
    }
}

export const changeStar = () => {
    return {
        type: 'CHANGE_STAR'
    }
}