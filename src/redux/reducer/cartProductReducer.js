import products from '../../fakeData/products.json'

const initialstate = {
    products: products,
    cart: [],
    currentProcuct: null
}


const cartProductReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const product = state.products.find(product => product.id === action.payload.id)

            const inCart = state.cart.find(product => product.id === action.payload.id ? true : false);

            const newState = {
                ...state,
                cart: inCart ? state.cart.map(product => product.id === action.payload.id ? { ...product, quan: product.quan + 1 } : product) : [...state.cart, { ...product, quan: 1 }]
            }

            return newState;
        }

        case 'REMOVE_CART_PRODUCT': {
            const newState = { ...state, cart: state.cart.filter(product => product.id !== action.payload.id) }
            return newState;
        }

        case 'UPDATE_PRODUCT_QUANTITY': {
            const newState = { ...state, cart: state.cart.map((product) => product.id === action.payload.id ? { ...product, quan: +action.payload.quan } : product) }
            return newState;
        }

        case 'CURRENT_PRODUCT': {
            const newState = { ...state, currentProcuct: action.payload }
            return newState;
        }

        default: return state;
    }
};

export default cartProductReducer;