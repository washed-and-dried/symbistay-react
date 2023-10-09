import {useLocation, useNavigate} from "react-router-dom";

export default function HotelDetails(){
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <h1>This is hotel details</h1>
            <h2>Message: {location.state.message}</h2>
            <button onClick={() => {navigate("/search")}}>back to search</button>
        </>
    )
}