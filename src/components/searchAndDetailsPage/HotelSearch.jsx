import {useState} from "react";
import HotelSearchResultCard from "./HotelSearchResultCard.jsx";
import {useLocation} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";

//this contains URI for the files
const FILE_PATH = {
    BERLIN: "/src/assets/jsonData/Berlin.json",
    LONDON: "/src/assets/jsonData/London.json",
    MADRID: "/src/assets/jsonData/Madrid.json",
    PARIS: "/src/assets/jsonData/Paris.json",
    ROME: "/src/assets/jsonData/Rome.json"
};

const decideFileByCountryName = (cityName) => {
    switch (cityName) {
        case "Paris":
            return FILE_PATH.PARIS;
        case "London":
            return FILE_PATH.LONDON;
        case "Madrid":
            return FILE_PATH.MADRID;
        case "Rome":
            return FILE_PATH.ROME;
        case "Berlin":
            return FILE_PATH.BERLIN;
    }
}

const fetchHotelsData = async (currentCitySelected) => {
    const file = decideFileByCountryName(currentCitySelected);
    const data = await fetch(file);
    return data.json();
}

const filterAndRenderHotels = (hotelsData, counter, amountToShow) => {
    const numberOfHotelsToShow = Math.min(counter * amountToShow, hotelsData?.length);
    return hotelsData?.slice(0, numberOfHotelsToShow).map(hotelDetails => {
        return <HotelSearchResultCard key={crypto.randomUUID()} {...hotelDetails}></HotelSearchResultCard>
    });
}

export default function HotelSearch() {
    const location = useLocation();

    //maybe we will query this from the backend in the future?
    const cityOptionList = ["Rome", "Berlin", "Paris", "London", "Madrid"];

    const [currentCitySelected, setCurrentCitySelected] = useState(
        //if we have sent the information for current city selected from the home page to here,
        //we will use it otherwise default to something randomly
        location?.state?.citySelectedAtHome ?
            location?.state?.citySelectedAtHome :
            cityOptionList[Math.floor(Math.random() * (cityOptionList.length))]
    );

    //used to make the more button functional
    const [hotelsCounter, setHotelsCounter] = useState(1);

    const hotelSearchResult = useQuery({
        queryFn: () => fetchHotelsData(currentCitySelected),
        cacheTime: 1000 * 60 * 60,
        staleTime: 1000 * 60 * 60,
        queryKey: [currentCitySelected]
    });

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
                {currentCitySelected}
                {filterAndRenderHotels(hotelSearchResult?.data?.hotels, hotelsCounter, 10)}
                <button onClick={() => setHotelsCounter((oldCounter) => oldCounter + 1)}>more</button>
            </div>
        </div>
    )
}