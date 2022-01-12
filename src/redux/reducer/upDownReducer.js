const initialstate = 1;


const upDownReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'INCREMENT_NUMBER': {
            const newState = state + action.payload;
            return newState;
        }

        case 'DECREMENT_NUMBER': {
            if (state > 1) {
                return state - action.payload
            }
        }

        default: return state;
    }
};

export default upDownReducer;