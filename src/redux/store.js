import { combineReducers, createStore } from "redux";
import cartProductReducer from "./reducer/cartProductReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import upDownReducer from "./reducer/upDownReducer";


const rootReducer = combineReducers({
    product: cartProductReducer,
    upDown: upDownReducer
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const persistor = persistStore(store)

export default store;