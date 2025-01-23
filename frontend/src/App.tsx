import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Authorization from './pages/Authorization/Authorization';
import UserProfile from './pages/UserProfile/UserProfile';



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Authorization' element={<Authorization/>}/>
        <Route path='/UserProfile/*' element={<UserProfile/>}/>

        {/* 404 page */}
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;