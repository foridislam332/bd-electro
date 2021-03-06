export const addToCart = (productId) => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            id: productId
        }
    }
}


export const removeProduct = (productId) => {
    return {
        type: 'REMOVE_CART_PRODUCT',
        payload: {
            id: productId
        }
    }
}

export const updateQuantity = (productId, value) => {
    console.log(productId, value)
    return {
        type: 'UPDATE_PRODUCT_QUANTITY',
        payload: {
            id: productId,
            quan: value
        }
    }
}

export const currentProduct = (product) => {
    return {
        type: 'CURRENT_PRODUCT',
        payload: product
    }
}