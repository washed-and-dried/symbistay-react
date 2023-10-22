import {useState} from "react";

export default function SearchX() {

    const options = ["Berlin", "Paris", "London", "Madrid", "Rome"];
    const [selOpt, setselOpt] = useState(options[0]);
    let guestsNo = 1;
    const [guests, setGuests] = useState(guestsNo);

    return (
        <div className="search-container">
            <div className="search-items">
                <div className="search-item-box">
                    <div className="search-text"><label htmlFor="location">Where to?</label></div>
                    <div className="search-option-text">
                        <select onChange={e => setselOpt(e.target.value)} defaultValue={selOpt} id="location">
                            {options.map((option, key) => (<option key={key}>{option}</option>))}
                        </select>
                    </div>
                </div>
                <div className="search-hr"></div>
                <div className="search-item-box">
                    <div className="search-text"><label htmlFor="checkin">Check In</label></div>
                    <div className="search-option-text"><input type="date" name="" id="checkin"/></div>
                </div>
                <div className="search-hr"></div>
                <div className="search-item-box">
                    <div className="search-text"><label htmlFor="checkout">Check Out</label></div>
                    <div className="search-option-text"><input type="date" name="" id="checkout"/></div>
                </div>
                <div className="search-hr"></div>
                <div className="search-item-box">
                    <div className="search-text"><label htmlFor="guests">Guests</label></div>
                    <div className="search-option-text">
                        <input onChange={e => setGuests(parseInt(e.target.value))}
                               defaultValue={guestsNo} id="guests" type="number"/>
                    </div>
                </div>
            </div>
            <div className="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                    <path
                        d="M39.2 42.5L26.6 29.9C25.6 30.7 24.45 31.3333 23.15 31.8C21.85 32.2667 20.4667 32.5 19 32.5C15.3667 32.5 12.2917 31.2417 9.775 28.725C7.25833 26.2083 6 23.1333 6 19.5C6 15.8667 7.25833 12.7917 9.775 10.275C12.2917 7.75833 15.3667 6.5 19 6.5C22.6333 6.5 25.7083 7.75833 28.225 10.275C30.7417 12.7917 32 15.8667 32 19.5C32 20.9667 31.7667 22.35 31.3 23.65C30.8333 24.95 30.2 26.1 29.4 27.1L42 39.7L39.2 42.5ZM19 28.5C21.5 28.5 23.625 27.625 25.375 25.875C27.125 24.125 28 22 28 19.5C28 17 27.125 14.875 25.375 13.125C23.625 11.375 21.5 10.5 19 10.5C16.5 10.5 14.375 11.375 12.625 13.125C10.875 14.875 10 17 10 19.5C10 22 10.875 24.125 12.625 25.875C14.375 27.625 16.5 28.5 19 28.5Z"
                        fill="black"/>
                </svg>
            </div>
        </div>
    )
}