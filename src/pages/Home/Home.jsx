import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Album from '../../components/molecules/Album';
import Playlist from '../../components/molecules/Playlist';
import Header from '../../components/organisms/Header';
import Nav from '../../components/organisms/Nav';
import { useGetAlbumsQuery, useGetPlaylistsQuery } from '../../services/spotifyApi';
import './home.css';
import Loader from '../../components/atoms/Loader/Loader';

const Home = () => {
    
    const navigate = useNavigate();

    const { data: albums, isLoading: loadingAlbums } = useGetAlbumsQuery({
        albums: '3RQQmkQEvNCY4prGKE6oc5,50SdnzlrXUMadt9JYeaJSh,0QLDQG7Jx78rEUDW03IhHC,5lJqux7orBlA1QzyiBGti1,11GmvpYnbgK0rSryPaV5BP,4hUQ4FB9GD5oDmw3XHIr0G', 
        token: sessionStorage.getItem('tokenUser')})

    const { data: playlists, isLoading: loadingPlaylists } = useGetPlaylistsQuery(
        sessionStorage.getItem('tokenUser'));

    useEffect(() => {
        if(!sessionStorage.getItem('tokenUser')){
            navigate('/')
        }
    },[navigate])

    return(
    <>
        {loadingAlbums || loadingPlaylists ? <Loader /> :
        <main className='home'>
            <Header />
            <section className='home-container'>
                <h1 className='home-container__title'>Hola!</h1>
                <section className='recommendations'>
                    <h2 className='recommendations__title'>Recomendaciones</h2>
                    <div className='recommendations__albums'>
                        {albums?.albums.map((album, index) =>
                            <Album key={`${album.name}-${index}`} id={album.id} img={album.images[0].url} nameImg={album.name} nameAlbum={album.name} />
                            )}
                    </div>
                </section>
                <section className='playlists'>
                    <h2 className='playlists__title'>Tus playlists</h2>
                    <div className='playlists__container'>
                        {playlists?.items.map((playlist, index) => 
                            <Playlist key={`${playlist.name}-${index}`} id={playlist.id} img={playlist.images[0].url} nameImg={playlist.name} namePlaylist={playlist.name} />
                            )}
                    </div>
                </section>
            </section>
        </main>}
    <Nav />
    </>
    )
}

export default Home;