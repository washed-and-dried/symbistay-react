import {useState} from "react";
import HotelSearchResultCard from "./HotelSearchResultCard.jsx";
import {useLocation} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import Berlin from "../../assets/jsonData/Berlin.json"
import Paris from "../../assets/jsonData/Paris.json"
import Rome from "../../assets/jsonData/Rome.json"
import London from "../../assets/jsonData/London.json"
import Madrid from "../../assets/jsonData/Madrid.json"

//this contains URI for the files
const FILE_PATH = {
    BERLIN: "/src/assets/jsonData/Berlin.json",
    LONDON: "/src/assets/jsonData/London.json",
    MADRID: "/src/assets/jsonData/Madrid.json",
    PARIS: "/src/assets/jsonData/Paris.json",
    ROME: "/src/assets/jsonData/Rome.json"
};

/**
 * Returns file path for the corresponding city
 * @param {string} cityName
 * @returns {string}
 */
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


/**
 * Fetches and returns the data from the json files present in the local repository
 * @returns {Promise<any>}
 * @param {string} currentCitySelected - Name of the currently selected city
 */
const fetchHotelsData = async (currentCitySelected) => {
    const file = decideFileByCountryName(currentCitySelected);

    //using file
    const data = await fetch(file);

    //using backend
    //const data = await fetch("http://" + location.hostname + ":4000/hotels/" + currentCitySelected);

    return data.json();
}

/**
 * Filters the data according to the counter and amountToShow then renders it.
 * @param hotelsData - Data fetched from the fetchHotelsData function
 * @param {number} counter - Counter for the current render
 * @param {number} amountToShow - Amount of hotels to show per page (defaults to 9)
 * @returns {*}
 */
const filterAndRenderHotels = (hotelsData, counter, amountToShow= 9) => {
    let showFrom = (counter - 1) * amountToShow;
    if (showFrom > hotelsData?.length - amountToShow){
        showFrom = hotelsData?.length - amountToShow - 1;
    }

    const showTill = Math.min(counter * amountToShow, hotelsData?.length);
    return hotelsData?.slice(showFrom, showTill).map(hotelDetails => {
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
        //cache and fresh for 60 minutes
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
                {filterAndRenderHotels(hotelSearchResult?.data?.hotels, hotelsCounter)}
                <button
                        onClick={() => setHotelsCounter((oldCounter) =>
                            oldCounter - 1 <= 0 ? 1 : oldCounter - 1)}>
                    prev
                </button>
                <button
                        onClick={() => setHotelsCounter((oldCounter) => oldCounter + 1)}>
                    next
                </button>
            </div>
        </div>
    )
}