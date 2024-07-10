import Header from "./Main_Data/Header";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./Main_Data/Home_Main";
import React, { useState, useEffect } from "react";
import Books from "./Modular/Books";


function WebpageBundle() {

    const [reFetch, setReFetch] = useState(false)




    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <Home />
            },
            {
                path:"/books",
                element: <Books />
            }
        ]
    )
    return (
        <>
            <Header />
            <RouterProvider router={router} />
        </>
    )
}


export default WebpageBundle;