import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import rootReducer from "./rootReducer";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [],
    whitelist: ['todo'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        {
            serializableCheck: {
                ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE, FLUSH],
            }
        }
    ),

});


export const persistor = persistStore(store);

