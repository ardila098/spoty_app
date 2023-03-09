import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {

    const navigate = useNavigate();

    const baseUrl = 'https://accounts.spotify.com/authorize';
    const clientID = 'faf8011669274c8da11c087d387dec6f';
    const redirect = 'http://localhost:3000/redirect';
    const scopes = ['playlist-read-collaborative', 'user-read-email', 'user-read-private', 'playlist-modify-public',
    'user-library-modify', 'user-library-read', 'playlist-read-private', 'playlist-modify-private']
    const loginUrl = `${baseUrl}?client_id=${clientID}&response_type=token&redirect_uri=${redirect}&scope=${scopes.join('%20')}&show_dialog=true`;

    useEffect(() => {
        if(sessionStorage.getItem('tokenUser')){
            navigate('/home')
        }
    },[navigate])

    return (
        <section className="login">
            <img className="login__img" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="Spotify Logo" />
            <a className="login__button" href={loginUrl} >Login</a>
        </section>  
    )
}

export default Login;