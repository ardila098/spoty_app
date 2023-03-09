import { useState, useEffect } from 'react';
import heart from '../../../assets/heart.png';
import heart1 from '../../../assets/heart-fill.png';
import './trackPlaylist.css';

const TrackPlaylist = ({ img, nameImg, nameTrack, nameArtists, loadingFavorite, favorites, idTrack, addTrack, deleteTrack, }) =>{

    const [isFavorite, setFavorite] = useState(false);
    const spanishFormat = new Intl.ListFormat('es');
    const artists = nameArtists.map((artist) => artist.name)

    useEffect(() => {
        if(!loadingFavorite){
            const ids = favorites.items.map(track => track.track.id)
            const isFavorite = ids.find(track => track === idTrack)
            if(isFavorite){
                setFavorite(true)
            }
        }
    }, [loadingFavorite])

    return(
        <div className='track-playlist'>
            <img className='track-playlist__img' src={img} alt={nameImg} />
            <div className='track-playlist__container track-playlist__container--second'>
                <h2 className='track-playlist__name'>{nameTrack}</h2>
                <h3 className='track-playlist__artists'>{spanishFormat.format(artists)}</h3>
            </div>
            {isFavorite ? <img onClick={() => {
                deleteTrack(idTrack)
                setFavorite(false)
            }} className='track-playlist__icon' src={heart1} alt="Favorite Icon" /> 
            : <img onClick={() => {
                addTrack(idTrack)
                setFavorite(true)
            }} className='track-playlist__icon' src={heart} alt="Favorite Icon" />}
        </div>
    )

}

export default TrackPlaylist;