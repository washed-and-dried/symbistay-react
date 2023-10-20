import { useLocation } from "react-router-dom";

export default function HotelDetails(){
    const location = useLocation();

    const hotelData = location?.state?.hotelData;

    const handleBookNowPressed = () => {
        console.log("What to do?")
    }

    return (
        <>
            <div className="hotel-details-container">
                <img src={hotelData.imageSource} alt="Hotel Image"/>
                <div className="hotel-details">
                    <div className="hotel-headings">{hotelData.title}</div>
                    <div className="hotel-rating">Star {hotelData.rating}</div>
                    <div className="hotel-price">{hotelData.hotelPrice}</div>
                    <div className="hotel-features">
                        <div className="hotel-features-heading">Features</div>
                        <ul>
                            {hotelData.subtitles?.map(subtitle => {
                                return <li key={crypto.randomUUID()}>{subtitle}</li>
                            })}
                        </ul>
                    </div>
                    <div className="hotel-book">
                        <div className="hotel-book-guest">
                            <label htmlFor="hotel-book-guest-count">Guests</label>
                            <input type="number" name="hotel-book-guest-count" id="hotel-book-guest-count" min={0}/>
                        </div>
                        <button onClick={handleBookNowPressed}>Book now</button>
                    </div>
                </div>
            </div>
        </>
    )
}