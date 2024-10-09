import './styling/App.css';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/forms/Login';
import Registration from './components/forms/Register';
import UserCart from './components/profiles/UserCart';
import FeaturedHome from './components/featured/featuredHome';
import CategoryHome from './components/category/categoryHome'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
          <CategoryHome />
            <Routes>
              <Route path="/" element={<FeaturedHome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/cart" element={<UserCart />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;
