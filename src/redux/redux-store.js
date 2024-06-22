import {combineReducers, legacy_createStore as createStore} from "redux"
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import { configureStore } from "@reduxjs/toolkit";

let reducers = combineReducers({
    messagesPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

// let newStore = structuredClone(store)

export default store;