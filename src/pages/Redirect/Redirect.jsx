import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../services/getToken.js';

const Redirect = () => {

    const [token] = useState(getToken(window.location.hash));
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            window.sessionStorage.setItem('tokenUser', token);
            navigate('/home');
        }else{
            navigate('/');
        }
    },[navigate, token, dispatch])

    return(
        <>
        </>
    )
}

export default Redirect;