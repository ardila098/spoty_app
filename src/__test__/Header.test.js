import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from '../components/organisms/Header';
import { spotifyApi } from "../services/spotifyApi";

test('Renderizacion Header y probando funciones', () => {

    const store = configureStore({
        reducer:{
            [spotifyApi.reducerPath]: spotifyApi.reducer
        },
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(spotifyApi.middleware)
    })

    const component = render(
        <Provider store={store}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    )

    const button = component.getByText('Cerrar sesión');
    sessionStorage.setItem('tokenUser', '1');
    expect(sessionStorage.getItem('tokenUser')).toBe('1');  
    fireEvent.click(button);
    expect(sessionStorage.getItem('tokenUser')).toBeUndefined;
})