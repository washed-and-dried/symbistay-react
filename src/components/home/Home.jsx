import SearchX from "./SearchX.jsx";
import "../../styles/homePage.css"

export default function Home() {
    return (
        <>
            <div className="home-container">
                <div id="mid">
                    <div className="mid-hotel-text">BOOK YOUR DESIRED <span className="hotel-text">HOTEL</span></div>
                    <div className="images">
                        <img alt="showcase-images"
                             src="https://a0.muscache.com/im/pictures/miso/Hosting-870061876045982502/original/da19f0d1-7d94-4b1a-97c5-62b091168244.jpeg?im_w=720"/>
                        <img alt="showcase-images"
                             src="https://a0.muscache.com/im/pictures/22564e48-ad71-4a75-a68e-d6fb9817060d.jpg?im_w=720"/>
                        <img alt="showcase-images"
                             src="https://a0.muscache.com/im/pictures/97e067cb-d936-4203-a6ba-0b78d501d1c9.jpg?im_w=720"/>
                        <img alt="showcase-images"
                             src="https://a0.muscache.com/im/pictures/3fc4cbd6-5f23-4b72-99ae-e44a802c0ebc.jpg?im_w=720"/>
                    </div>
                </div>
                <SearchX/></div>
        </>
    );
}