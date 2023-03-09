import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/atoms/Loader/Loader";
import TrackAlbum from "../../components/molecules/TrackAlbum/TrackAlbum";
import Header from '../../components/organisms/Header';
import Nav from '../../components/organisms/Nav';
import { useGetAlbumsQuery, useGetTracksAlbumsQuery, useGetTracksFavoritesQuery,
     useDeleteTracksFavoritesMutation, usePutTracksFavoritesMutation } from "../../services/spotifyApi";
import './tracksAlbums.css';

const Tracks = () => {

    const navigate = useNavigate();
    const id = useSelector(state => state.idForTracks.idForTracks);
    
    const { data: album, isLoading: loadingAlbum } = useGetAlbumsQuery({
        albums: id,
        token: sessionStorage.getItem('tokenUser') 
    });
    
    const { data: tracks, isLoading: loadingTracks } = useGetTracksAlbumsQuery({
        id,
        token: sessionStorage.getItem('tokenUser') 
    });
    
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
        {loadingAlbum || loadingTracks ? <Loader /> :
        <>
        <main className="albums">
        <Header />
            <section className="tracks-album">
                <section className="tracks-album__container">
                    <img className="tracks-album__img" src={album?.albums[0].images[0].url} alt={album?.albums[0].name} />
                    <h1 className="tracks-album__name">{album?.albums[0].name}</h1>
                </section>
                <section className="tracks-album__tracks">
                    {tracks?.items.map((track, index) => 
                        <TrackAlbum key={`${track.name}-${index}`} addTrack={addTrack} deleteTrack={deleteTrack} loadingFavorite={loadingFavorites} favorites={favorites} idTrack={track.id} img={album?.albums[0].images[0].url} nameImg={album?.albums[0].name} nameTrack={track.name} nameArtists={track.artists} />
                        )}
                </section>
            </section>
        </main>
        </>
        }
        <Nav />
        </>
    )

}

export default Tracks;