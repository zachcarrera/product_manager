import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./views/Dashboard";
import { OneProduct } from "./views/OneProduct";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/:_id" element={<OneProduct />} />
            </Routes>
        </div>
    );
}

export default App;
