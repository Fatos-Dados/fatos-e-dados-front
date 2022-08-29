import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, SignIn } from "../pages";
import { PublicRoute } from "./publicRoute";

const NavigationRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/login" element={<SignIn />} />
            </Routes>
        </Router>
    )
}

export default NavigationRoutes;
