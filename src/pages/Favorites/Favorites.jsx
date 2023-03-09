import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/atoms/Loader/Loader';
import TrackFavorites from '../../components/molecules/TrackFavorites/TrackFavorites'
import Header from "../../components/organisms/Header";
import Nav from "../../components/organisms/Nav";
import { useGetTracksFavoritesQuery, useDeleteTracksFavoritesMutation } from '../../services/spotifyApi';
import './favorites.css'

const Favorites = () => {

    const navigate = useNavigate();

    const { data: favorites, isLoading: loadingAFavorites, refetch } = useGetTracksFavoritesQuery(
        sessionStorage.getItem('tokenUser')
    )

    const [ deleteFavorite, { isSuccess } ] = useDeleteTracksFavoritesMutation(); 

    useEffect(() => {
        if(!sessionStorage.getItem('tokenUser')){
            navigate('/')
        }
        refetch()
    },[navigate, isSuccess])

    const onclick = (idTrack) => {
        deleteFavorite({
            id: idTrack,
            token: sessionStorage.getItem('tokenUser')
        })
    }

    return(
        <>
        {loadingAFavorites ? <Loader /> :
        <>
        <main className="favorites-main">
        <Header />
            <section className='favorites'>
                <section className="favorites__container">
                    <img className="favorites__img" src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png" alt="Favorites" />
                    <h1 className="favorites__title">Canciones que te gustan</h1>
                </section>
                {favorites?.items.length === 0  && <h2 className='favorites__error'>Aquí aparecerán las canciones que te gusten. Guarda canciones pulsando el icono del corazón.</h2>}
                <section className="favorites__tracks">
                    {favorites?.items.map((favorite, index) => 
                        <TrackFavorites key={`${favorite.track.name}-${index}`} onclick={onclick} idTrack={favorite.track.id} img={favorite.track.album.images[0].url} nameImg={favorite.track.name} nameTrack={favorite.track.name} nameArtists={favorite.track.artists} />
                        )}
                </section>
            </section>
        </main>
        </>}
        <Nav />
        </>
    )
}

export default Favorites;