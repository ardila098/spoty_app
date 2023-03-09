import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setId } from "../../context/reducers/idReducers";

const Playlist = ({id, img, nameImg, namePlaylist}) => {

    const dispatch = useDispatch();

    return(
        <div className="playlist">
            <Link onClick={() => dispatch(setId(id))} to='/playlists'><img className="playlist__img" src={img} alt={nameImg} /></Link>
            <h3 className="playlist__name">{namePlaylist}</h3>
        </div>
    )

}

export default Playlist;