import { rootReducer } from "./reducer";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistStore, persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { SchoolManagementApi } from "./apis/schoolManagementApi";

const persistConfig = {
  key: "schoolmanagement",
  storage,
  whitelist: ["auth", "config", "theme"],
};

// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(SchoolManagementApi.middleware),
});

setupListeners(store.dispatch);
export const persister = persistStore(store);

// export default store;
