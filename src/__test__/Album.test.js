import idReducers from "../context/reducers/idReducers";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Album from '../components/molecules/Album';
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";

test('Renderizacion Album, y clicks', () => {

    const props = {
        id: '1a',
        img: 'https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72',
        nameImg: 'Un verano sin ti',
        nameAlbum: 'Un verano sin ti'
    }

    const store = configureStore({
        reducer:{
            idReducers
        }
    });

    const mockHandler = jest.fn();

    const component = render(
        <Provider store={store}>
            <BrowserRouter>
                <Album id={props.id} img={props.img} nameImg={props.nameImg} nameAlbum={props.nameAlbum} />
            </BrowserRouter>
        </Provider>
    );

    const album = component.getByAltText('Un verano sin ti');
    expect(album.parentNode.href).toContain('/albums')
})