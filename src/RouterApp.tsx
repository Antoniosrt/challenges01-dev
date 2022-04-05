import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Error404 from "./pages/Error404";
import MyTeam from "./pages/MyTeam";

export function RouterApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MyTeam />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Router>
    );
}