import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import AllCategories from './Pages/AllCategories/AllCategories';
import Carts from './Pages/Carts/Carts';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';
import SingleProduct from './Pages/SingleProduct/SingleProduct';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Navigation></Navigation>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/product/:productId" element={<SingleProduct />} />
                        <Route path="/allCategories/:categoryName" element={<AllCategories />} />
                        <Route path="/carts" element={
                            <PrivateRoute>
                                <Carts />
                            </PrivateRoute>
                        } />
                        <Route path="/checkout" element={
                            <PrivateRoute>
                                <CheckOut />
                            </PrivateRoute>
                        } />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                    <Footer></Footer>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
