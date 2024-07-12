import Header from "./Main_Data/Header";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./Main_Data/Home_Main";
import React, { useState, useEffect } from "react";
import Books from "./Modular/Books";
import Movies from "./Modular/Movies"
import Games from "./Modular/Games"
import SubmitForm from "./Modular/SubmitForm";


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
            },
            {
                path:"/movies",
                element: <Movies />
            },
            {
                path:"/games",
                element: <Games />
            }
        ]
    )
    return (
        <>
            <Header />
            <RouterProvider router={router} />
            <SubmitForm />
        </>
    )
}


export default WebpageBundle;