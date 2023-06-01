import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestPage from "./pages/TestPage";
import AnotherPage from "./pages/AnotherPage";
import Layout from "./components/Layout";

function Main() {
    return (
        <Router>
            <Layout>
                <Routes>

                    <Route exact path="/" element={<TestPage />} />
                    <Route exact path="/anotherpage" element={<AnotherPage />} />
                </Routes>
            </Layout>
        </Router>

    );
}

export default Main;

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <React.StrictMode>
        <Main />,
    </React.StrictMode>
);