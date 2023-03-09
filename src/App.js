import { Route, Routes } from 'react-router-dom';
import './App.css';
import Favorites from './pages/Favorites/Favorites';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Redirect from './pages/Redirect/Redirect';
import TracksAlbums from './pages/TracksAlbums/TracksAlbums';
import TracksPlaylists from './pages/TracksPlaylists/TracksPlaylists';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/redirect' element={<Redirect />} />
        <Route path='/home' element={<Home />} />
        <Route path='/albums' element={<TracksAlbums />} />
        <Route path='/playlists' element={<TracksPlaylists />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route exact path='*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
