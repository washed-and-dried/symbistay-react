import {Route, Routes} from "react-router-dom";
import Home from "./home/Home.jsx";
import HotelSearch from "./searchAndDetailsPage/HotelSearch.jsx";
import HotelDetails from "./searchAndDetailsPage/HotelDetails.jsx";
import Contact from "./Contact.jsx";
import Profile from "./Profile.jsx";

export default function Routing(){
    return(
        <Routes>
            <Route element={<Home/>} path={"/"}/>
            <Route element={<HotelSearch/>} path={"/search"}/>
            <Route element={<HotelDetails/>} path={"/search/details"}/>
            <Route element={<Contact/>} path={"/contact"}/>
            <Route element={<Profile/>} path={"/profile"}/>
        </Routes>

    )
}