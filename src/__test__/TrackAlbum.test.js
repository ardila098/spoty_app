import { fireEvent, prettyDOM, render } from "@testing-library/react";
import TrackAlbum from '../components/molecules/TrackAlbum/TrackAlbum';

test('Renderizacion y funciones', () => {

    const props = {
        img: 'https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72',
        nameImg: 'Un verano sin ti',
        nameTrack: 'Moscow Mule',
        nameArtists: 'Bad Bunny',
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

    const component = render(<TrackAlbum img={props.img} nameImg={props.nameImg} nameTrack={props.nameTrack}
        nameArtists={props.nameArtists} idTrack={props.idTrack} loadingFavorite={props.loadingFavorite}
        favorites={props.favorites} addTrack={mockHandler} deleteTrack={mockHandler} />)
    
    const div = component.getByAltText('Un verano sin ti').parentNode;
    const img = component.getByAltText('Favorite Icon');
    expect(img.src).toContain('heart-fill.png');
    fireEvent.click(img);
    expect(img.src).toContain('heart.png');
    fireEvent.click(img);
    expect(img.src).toContain('heart-fill.png');
})