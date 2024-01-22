import { combineReducers, configureStore, } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from 'redux-persist';
import persistStore from "redux-persist/es/persistStore";


const rootReducer = combineReducers({
  user : userReducer
});

const persistConfig = {
  key: "root",
  storage, // localStorage에 저장
  //whitelist: [] 여러 reducer 중 해당 reducer만 localStorage에 저장
  //blacklist: [] 제외
};

const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
  reducer:persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck:{
      ignoredActions: [FLUSH, REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
    }
  }),
})

export const persistor = persistStore(store);