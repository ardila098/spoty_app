import { useNavigate } from 'react-router-dom';
import person from '../../assets/person.png';
import Avatar from '../atoms/Avatar';
import Button from '../atoms/Button';
import { useGetInfoUserQuery } from '../../services/spotifyApi';
import { useDispatch } from 'react-redux';
import { resetState } from '../../context/reducers/idReducers';

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { data: user, isLoading: loadingUser } = useGetInfoUserQuery(
        sessionStorage.getItem('tokenUser'));

    const onclick = () => {
        sessionStorage.removeItem('tokenUser');
        dispatch(resetState());
        navigate('/')
    }

    return(
        <header className='header'>
            <Button onclick={onclick} type='submit' value='Cerrar sesión' />
            <Avatar avatar={loadingUser ? person : user?.images[0].url} name='User Icon' nameUser={user?.display_name} />
        </header>
    )

}

export default Header;