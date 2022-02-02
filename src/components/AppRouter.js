import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import ProductPage from "../pages/ProductPage";
import Score from "../pages/Score";
import ScorePage from "../pages/ScorePage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/score'} element={<Score/>}/>
            <Route path={'/auth'} element={<Auth/>}/>
            <Route path={'/:id'} element={<ProductPage/>}/>
            <Route path={'score/:id'} element={<ScorePage/>}/>
        </Routes>
    );
};

export default AppRouter;
