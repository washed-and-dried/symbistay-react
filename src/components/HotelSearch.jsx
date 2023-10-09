import {useNavigate} from "react-router-dom";

export default function HotelSearch() {
    const navigate = useNavigate();

    return (
        <>
            <h1>this is hotel search</h1>
            <button onClick={() => {
                navigate("/")
            }}>
                Click me!!
            </button>
            <button onClick={() => {
                navigate("details", {state: {message: "God's message"}});
            }}>
                Hotel Details
            </button>
        </>
    )
}