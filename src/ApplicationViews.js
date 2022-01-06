import React from "react"
import {Route, Routes} from "react-router-dom"
import {Home} from "./Home"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { ShowProvider } from "./components/shows/ShowProvider"
import { ShowList } from "./components/shows/ShowList"
import { ShowForm } from "./components/shows/ShowForm"
import { FindShowProvider } from "./components/findshows/FindShowProvider"
import { FindShowList } from "./components/findshows/FindShowList"


export const ApplicationViews = () => {
    return (

        <ShowProvider>
        <FindShowProvider>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myshows/*" element={<ShowList />} />
        <Route path="/myshows/create/*" element={<ShowForm />} />
        <Route path="/myshows/edit/:showId/*" element={<ShowForm />} />
        <Route path="/findshows/*" element={<FindShowList />} />
        </Routes>
        </FindShowProvider>
        </ShowProvider>
    )

}