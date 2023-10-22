import {useNavigate} from "react-router-dom";

const validateImage = (imageSource) => {
    /* FIXME: This lags out the entire render
    var http = new XMLHttpRequest();
    http.open('HEAD', imageSource, false);
    http.send();
    if (http.status !== 404){
        return imageSource;
    }
    else{
        return "https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png"; //404 image kinda
    }
    */

    return imageSource
}

export default function HotelSearchResultCard({thumbnail, title, subtitles, price, rating, link}){
    const navigate = useNavigate();

    const imageSource = validateImage(thumbnail);
    const hotelPrice = "" + price.currency + price.value;

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