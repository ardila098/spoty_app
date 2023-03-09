import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/atoms/Loader/Loader";
import TrackPlaylist from "../../components/molecules/TrackPlaylist/TrackPlaylist";
import Header from '../../components/organisms/Header';
import Nav from '../../components/organisms/Nav';
import { useGetPlaylistQuery, useGetTracksPlaylistsQuery, useGetTracksFavoritesQuery,
     usePutTracksFavoritesMutation, useDeleteTracksFavoritesMutation } from "../../services/spotifyApi";
import './tracksPlaylists.css';

const TracksPlaylists = () => {

    const navigate = useNavigate();
    const id = useSelector(state => state.idForTracks.idForTracks);

    const { data: playlist, isLoading: loadingAPlaylist } = useGetPlaylistQuery({
        id,
        token: sessionStorage.getItem('tokenUser')
    })

    const { data: tracks, isLoading: loadingTracks } = useGetTracksPlaylistsQuery({
        id,
        token: sessionStorage.getItem('tokenUser')
    })

    const { data: favorites, isLoading: loadingFavorites, refetch } = useGetTracksFavoritesQuery(
        sessionStorage.getItem('tokenUser'))
        
    const [ putFavorite, { isSuccess: isSuccessAdd}] = usePutTracksFavoritesMutation();
    const [ deleteFavorite, { isSuccess: isSuccessDelete }] = useDeleteTracksFavoritesMutation();

    useEffect(() => {
        refetch()
        if(!sessionStorage.getItem('tokenUser')){
            navigate('/')
        }

        if (!id) {
            navigate('/home')
        }
    },[navigate, id, isSuccessAdd, isSuccessDelete, refetch])

    const deleteTrack = (idTrack) => {
        deleteFavorite({
            id: idTrack,
            token: sessionStorage.getItem('tokenUser')
        })
    }
    
    const addTrack = (idTrack) => {
        putFavorite({
            id: idTrack,
            token: sessionStorage.getItem('tokenUser')
        })
    }

    return(
        <>
        {loadingAPlaylist || loadingTracks ? <Loader /> :
        <>
        <main className="playlists-main">
            <Header />
            <section className="tracks-playlists">
                <section className="tracks-playlists__container">
                    <img className="tracks-playlists__img" src={playlist?.images[0].url} alt={playlist?.name} />
                    <h1 className="tracks-playlists__title">{playlist?.name}</h1>
                </section>
                <section className="tracks-playlists__tracks">
                    {tracks?.items.map((track, index) => 
                        <TrackPlaylist key={`${track.track.name}-${index}`} addTrack={addTrack} deleteTrack={deleteTrack} loadingFavorite={loadingFavorites} favorites={favorites} idTrack={track.track.id} img={track.track.album.images[0].url} nameImg={track.track.name} nameTrack={track.track.name} nameArtists={track.track.artists} />
                        )}
                </section>     
            </section>
        </main>
        </>}
        <Nav />
        </>
    )

}

export default TracksPlaylists;