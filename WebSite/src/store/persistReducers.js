import storage from "redux-persist/lib/storage"; // utiliza o localstorage 
import { persistReducer } from 'redux-persist'; 

export default reducers => {
    const persistedReducer = persistReducer({
        // key define qual aplicaçao vai usar a storage
        key: 'dezcontao',
        storage,
        whitelist: ['edit']
    },
    reducers
    );

    return persistedReducer;
};