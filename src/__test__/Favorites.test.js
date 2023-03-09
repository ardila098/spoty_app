import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Favorites from '../pages/Favorites/Favorites';
import { spotifyApi } from "../services/spotifyApi";
import idReducers from "../context/reducers/idReducers";

test('Renderizacion Favorites y probando funciones', () => {

    const store = configureStore({
        reducer:{
            [spotifyApi.reducerPath]: spotifyApi.reducer,
            idReducers
        },
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(spotifyApi.middleware)
    })

    const component = render(
        <Provider store={store}>
            <BrowserRouter>
                <Favorites />
            </BrowserRouter>
        </Provider>
    );
})