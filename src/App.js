import MovieCardList from './components/MovieCardList/MovieCardList';
import NavBar from './components/NavBar/NavBar';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import MoviePage from './components/MoviePage/MoviePage';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<MovieCardList />} />
        <Route path="MoviePageDetail/:id" element={<MoviePage />} />
        <Route path="/*" element={  <div>page not found</div> } />
      </Routes>
    </div>
  );
}

export default App;
