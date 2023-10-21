import {useNavigate} from "react-router-dom";
import Footer from "./constants/Footer";
import MiddleSection from "./firstpageshit/Middlesection.jsx";


export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            {/* <div>This is home</div>
            <button onClick={() => {navigate("/search")}}>Click me!!</button> */}
            <MiddleSection></MiddleSection>

            <Footer></Footer>
        </>
        
    );
}