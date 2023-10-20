import {useNavigate} from "react-router-dom";

const validateImage = (imageSource) => {
    return imageSource;
}

export default function HotelSearchResultCard({thumbnail, title, subtitles, price, rating, link}){
    const navigate = useNavigate();

    const imageSource = validateImage(thumbnail);
    const hotelPrice = ""+ price.currency +price.value;

    return(
        <>
            <div className="hotel-search-result-card" onClick={() => {
                navigate("details", {state: {
                    hotelData: { imageSource, title, subtitles, hotelPrice, rating, link }
                }})
            }}>
                <img src={imageSource} alt="Hotel Image"/>
                <div>{title}</div>
                <div>
                    <ul>
                        {subtitles?.map(subtitle => {
                            return <li key={crypto.randomUUID()}>{subtitle}</li>
                        })}
                    </ul>
                </div>
                <div>{hotelPrice}</div>
            </div>
        </>
    )
}