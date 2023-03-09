import { fireEvent, prettyDOM, render } from "@testing-library/react";
import TrackPlaylist from '../components/molecules/TrackPlaylist/TrackPlaylist';

test('Renderizaciones y funciones', () => {
    const props = {
        img: 'https://mosaic.scdn.co/640/ab67616d0000b27358cb4a7703f916ff5b3318dfab67616d0000b273aef5ce2f4997ed15ebbc2977ab67616d0000b273b1c351478a62d23cb2a4446eab67616d0000b273b49b1b486de0d62e8b4cade3',
        nameImg: 'Rock / Pop en español',
        nameTrack: 'La flaca',
        nameArtists: 'Jarabe de palo',
        idTrack: '1a',
        favorites: {
            items: [{
                track: {
                    id: '1a'
                }
            },{
                track:{
                    id: '2b' 
                }
            }]
        },
        loadingFavorite: false,
    }

    const mockHandler = jest.fn()

    const component = render(<TrackPlaylist img={props.img} nameImg={props.nameImg} nameTrack={props.nameTrack}
        nameArtists={props.nameArtists} idTrack={props.idTrack} loadingFavorite={props.loadingFavorite}
        favorites={props.favorites} addTrack={mockHandler} deleteTrack={mockHandler} />)
    
    const div = component.getByAltText('Rock / Pop en español').parentNode;
    const img = component.getByAltText('Favorite Icon');
    expect(img.src).toContain('heart-fill.png');
    fireEvent.click(img);
    expect(img.src).toContain('heart.png');
    fireEvent.click(img);
    expect(img.src).toContain('heart-fill.png');
})