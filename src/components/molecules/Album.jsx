import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setId } from "../../context/reducers/idReducers";

const Album = ({id, img, nameImg, nameAlbum}) => {

    const dispatch = useDispatch();

    return(
        <div className="album">
            <Link onClick={() => dispatch(setId(id))} to='/albums'><img className="album__img" src={img} alt={nameImg} /></Link>
            <h3 className="album__name">{nameAlbum}</h3>
        </div>
    )

}

export default Album;