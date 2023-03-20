import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./views/Dashboard";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </div>
    );
}

export default App;
