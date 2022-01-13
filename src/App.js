import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Carts from './Pages/Carts/Carts';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';

function App() {
    return (
        <div className="App">
            <Router>
                <Navigation></Navigation>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/home/:productId" element={<Home />} />
                    <Route path="/carts" element={<Carts />} />
                    <Route path="/checkout" element={<CheckOut />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
