import heart1 from '../../../assets/heart-fill.png';
import './trackFavorites.css';

const TrackFavorites = ({ img, nameImg, nameTrack, nameArtists, idTrack, onclick}) =>{  

    const spanishFormat = new Intl.ListFormat('es');
    const artists = nameArtists.map((artist) => artist.name)

    return(
        <div className='track-favorites'>
            <img className='track-favorites__img' src={img} alt={nameImg} />
            <div className='track-favorites__container track-favorites__container--second'>
                <h2 className='track-favorites__name'>{nameTrack}</h2>
                <h3 className='track-favorites__artists'>{spanishFormat.format(artists)}</h3>
            </div>
            {<img  onClick={() => onclick(idTrack)} className='track-favorites__icon' src={heart1} alt="Favorite Icon" />}
        </div>
    )

}

export default TrackFavorites;