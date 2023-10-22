import {useState} from "react";
import HotelSearchResultCard from "./HotelSearchResultCard.jsx";
import {useLocation} from "react-router-dom";

const fetchData = /*FIXME: async*/ (city) => {
    return [
        {
            "thumbnail": "https://a0.muscache.com/im/pictures/miso/Hosting-647664199858827562/original/cfc2fc4c-d703-4827-bc25-f1acb07e0025.jpeg?im_w=720",
            "title": "Private room in Tempelhof",
            "subtitles": ["Privatzimmer in Tempelhofer Feld", "1 bed", "Jul 24 – 31"],
            "price": { "currency": "$", "value": 31, "period": "night" },
            "rating": 5,
            "link": "https://www.airbnb.com/rooms/647664199858827562"
        },
        {
            "thumbnail": "https://a0.muscache.com/im/pictures/b9cb8b8c-51b3-46c4-b9cd-d27053f7d628.jpg?im_w=720",
            "title": "Private room in Mitte",
            "subtitles": ["Tiny, individual Room with private Bathroom", "1 small double bed", "Sep 1 – 8"],
            "price": { "currency": "$", "value": 40, "period": "night" },
            "rating": 4.96,
            "link": "https://www.airbnb.com/rooms/41220512"
        }];
}

export default function HotelSearch() {
    const location = useLocation();

    const [currentCitySelected, setCurrentCitySelected] = useState(
        location?.state?.citySelectedAtHome ? location?.state?.citySelectedAtHome : "Paris"
    );
    /*
    * FIXME: This state will be replaced by @tanstack/react-query~useQuery(fetchData(currentCitySelected))
    * */
    const [hotelSearchResult, setHotelSearchResult] = useState(fetchData(currentCitySelected));

    //maybe we will query this from the backend in the future?
    const cityOptionList = ["Rome", "Berlin", "Paris", "London", "Madrid"];


    return (
        <div className="hotel-search-container">
            <div className="hotel-option-container">
                <label htmlFor="hotel-city-selection">City</label>
                <select id="hotel-city-selection" value={currentCitySelected}
                        onChange={e => setCurrentCitySelected(e.target.value)}>
                    {cityOptionList.map(city => {
                        return <option key={crypto.randomUUID()} value={city}>{city}</option>;
                    })}
                </select>

                <label htmlFor="hotel-city-checkin">Check in</label>
                <input type="date" id="hotel-city-checkin"></input>

                <label htmlFor="hotel-city-checkin">Check out</label>
                <input type="date" id="hotel-city-checkout"></input>

                <label htmlFor="hotel-guest-count">Guests</label>
                <input type="number" name="hotel-guest-count" id="hotel-guest-count" max={10} min={1}></input>
            </div>
            <div className="hotel-search-result">
                {hotelSearchResult.map(hotelDetails => {
                    return <HotelSearchResultCard key={crypto.randomUUID()} {...hotelDetails}></HotelSearchResultCard>
                })}
            </div>
        </div>
    )
}