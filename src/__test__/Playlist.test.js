import idReducers from "../context/reducers/idReducers";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Playlist from '../components/molecules/Playlist';
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";

test('Renderizacion Playlist, y clicks', () => {

    const props = {
        id: '1a',
        img: 'https://mosaic.scdn.co/640/ab67616d0000b27358cb4a7703f916ff5b3318dfab67616d0000b273aef5ce2f4997ed15ebbc2977ab67616d0000b273b1c351478a62d23cb2a4446eab67616d0000b273b49b1b486de0d62e8b4cade3',
        nameImg: 'Rock / Pop en español',
        namePlaylist: 'Rock / Pop en español'
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
                <Playlist id={props.id} img={props.img} nameImg={props.nameImg} namePlaylist={props.namePlaylist} />
            </BrowserRouter>
        </Provider>
    );

    const playlist = component.getByAltText('Rock / Pop en español');
    expect(playlist.parentNode.href).toContain('/playlists')
})