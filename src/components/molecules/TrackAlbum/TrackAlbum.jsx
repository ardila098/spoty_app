import { useEffect, useState } from 'react';
import heart from '../../../assets/heart.png';
import heart1 from '../../../assets/heart-fill.png';
import './trackAlbum.css';

const TrackAlbum = ({ img, nameImg, nameTrack, nameArtists, idTrack, favorites, loadingFavorite, addTrack, deleteTrack }) =>{

    const [ isFavorite, setFavorite ] = useState(false);
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
        <div className='track-album'>
            <img className='track-album__img' src={img} alt={nameImg} />
            <div className='track-album__container track-album__container--second'>
                <h2 className='track-album__name'>{nameTrack}</h2>
                <h3 className='track-album__artists'>{spanishFormat.format(artists)}</h3>
            </div>
            {isFavorite ? <img onClick={() => {
                deleteTrack(idTrack)
                setFavorite(false)
            }} className='track-album__icon' src={heart1} alt="Favorite Icon" /> 
            : <img onClick={() => {
                addTrack(idTrack)
                setFavorite(true)
            }} className='track-album__icon' src={heart} alt="Favorite Icon" />}
        </div>
    )

}

export default TrackAlbum;