import Navigation from "./Navigation";
import * as React from "react";
import {
    Routes,
    Route, Navigate,
} from "react-router-dom";
import Layout from "./Layout";
import Info from "./pages/Info";
import News from "./pages/News";
import Documents from "./pages/Documents";
import Feedback from "./pages/Feedback";
import Contacts from "./pages/Contacts";

const Main = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Navigate to="/news" />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/docs" element={<Documents />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="/feedback" element={<Feedback />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Route>
            </Routes>
        </>
    );
};

export default Main;
