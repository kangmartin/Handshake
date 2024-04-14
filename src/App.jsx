import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationFooter from "./components/NavigationFooter.jsx";
import FavoriteAssociationsList from "./components/FavoriteAssociationsList.jsx";
import CardSwiper from "./components/CardSwiper.jsx";
import Profile from "./components/Profile.jsx";
export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/associations" element={<FavoriteAssociationsList />} />
                    <Route path="/swipe" element={<CardSwiper />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
                <NavigationFooter />
            </div>
        </Router>
    );
}
