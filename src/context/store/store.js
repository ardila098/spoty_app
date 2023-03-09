import { configureStore } from "@reduxjs/toolkit";
import { spotifyApi } from "../../services/spotifyApi";
import idReducers from "../reducers/idReducers";


export const store = configureStore({
    reducer: {
        [spotifyApi.reducerPath]: spotifyApi.reducer,
        idForTracks: idReducers
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(spotifyApi.middleware)
})

