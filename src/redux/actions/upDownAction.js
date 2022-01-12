export const incNumber = (num) => {
    return {
        type: 'INCREMENT_NUMBER',
        payload: num
    }
}

export const decNumber = (num) => {
    return {
        type: 'DECREMENT_NUMBER',
        payload: num
    }
}