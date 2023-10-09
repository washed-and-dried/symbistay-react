import {useNavigate} from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div>This is home</div>
            <button onClick={() => {navigate("/search")}}>Click me!!</button>
        </>
    );
}