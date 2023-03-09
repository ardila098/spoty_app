import { Link } from "react-router-dom";
import home from '../../assets/home.png';
import star from '../../assets/star.png';

const Nav = () => {
    return(
        <nav className='nav'>
            <Link to='/home'>
                <figure className="nav__logo">
                    <img className="nav__spotify" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="Spotify Logo" />
                </figure>
            </Link>
            <ul className="nav__list">
                <li className="nav__item">
                    <Link to='/home'><img className="nav__img" src={home} alt="Icon Home" /></Link>
                    <Link className="nav__link" to='/home'>Home</Link>
                </li>
                <li className="nav__item">
                    <Link to='/favorites'><img className="nav__img" src={star} alt="Icon Star" /></Link>
                    <Link className="nav__link" to='/favorites'>Favorites</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;