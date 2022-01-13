import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Carts from './Pages/Carts/Carts';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Navigation from './Pages/Shared/Navigation/Navigation';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Navigation></Navigation>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/home/:productId" element={<Home />} />
                        <Route path="/carts" element={<Carts />} />
                        <Route path="/checkout" element={<CheckOut />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
