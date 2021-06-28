export const increment = (name) => {
    return {
        type: 'INCREMENT',
        payload: name
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}