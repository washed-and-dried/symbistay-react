
import { useNavigate } from "react-router-dom";
import MiddleSection from "./firstpageshit/Middlesection.jsx";
import SearchX from "./SearchX.jsx";

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            {/* <div>This is home</div>
            <button onClick={() => {navigate("/search")}}>Click me!!</button> */}
            <MiddleSection></MiddleSection>

            <div>This is home</div>
            <button onClick={() => {
                navigate("/search", {
                    state: {
                        citySelectedAtHome: "Berlin" //FIXME: Prolly setup a state for the selection and other stuffs
                    }
                })
            }}>Go to search</button>
            <SearchX />

        </>

    );
}