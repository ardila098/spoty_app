import { fireEvent, render } from "@testing-library/react"
import TrackFavorites from "../components/molecules/TrackFavorites/TrackFavorites"

test('Renderizacion y funciones', () => {

    const props = {
        img: 'https://i.scdn.co/image/ab67616d0000b273548f7ec52da7313de0c5e4a0',
        nameImg: 'La dificil',
        nameTrack: 'La dificil',
        nameArtists: 'Bad Bunny',
        idTrack: '1a',
    }

    const mockHandler = jest.fn();

    const component = render(<TrackFavorites img={props.img} nameImg={props.nameImg} nameTrack={props.nameTrack}
        nameArtists={props.nameArtists} idTrack={props.idTrack} onclick={mockHandler} />)

    const img = component.getByAltText('Favorite Icon');
    fireEvent.click(img);
    expect(mockHandler).toHaveBeenCalledTimes(1);
})