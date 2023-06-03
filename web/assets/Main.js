import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestPage from "./pages/TestPage";
import AnotherPage from "./pages/AnotherPage";
import Home from "./pages/Home";
import Header from "./components/Header";
import Layout from "./components/Layout";

function Main() {
    return (
        // <BrowserRouter>
        <Router>
            <Header />
            <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/testpage" element={<TestPage />} />
                <Route exact path="/anotherpage" element={<AnotherPage />} />
            </Routes>
        </Router>
        // {/* </BrowserRouter> */}
    );
}

export default Main;

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);