import LandingPage from './LandingPage/LandingPage';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Postview from './PostView/PostView';
import AddPost from './PostView/AddPost';

function App() {
  return (
    <div className="Wrapper">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/uploads' element={<AddPost/>}/>
          <Route path='/instaclone' element={<Postview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
