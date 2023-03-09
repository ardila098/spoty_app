import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Redirect from '../pages/Redirect/Redirect';
import idReducers from "../context/reducers/idReducers";
import { spotifyApi } from "../services/spotifyApi";

test('Renderizacion Redirect', () => {

    const store = configureStore({
        reducer: {
            [spotifyApi.reducerPath]: spotifyApi.reducer,
            idForTracks: idReducers
        },
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(spotifyApi.middleware)
    })

    const component = render(
        <Provider store={store}>
            <BrowserRouter>
                <Redirect />
            </BrowserRouter>
        </Provider>
    )
})