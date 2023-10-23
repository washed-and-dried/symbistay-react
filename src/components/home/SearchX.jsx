import {useState} from "react";
import SearchIcon from "../../assets/svgs/search_icon.svg"
import {useNavigate} from "react-router-dom";

export default function SearchX() {
    const navigate = useNavigate();

    const options = ["Berlin", "Paris", "London", "Madrid", "Rome"];
    const [selOpt, setselOpt] = useState(options[0]);
    const [guests, setGuests] = useState(1);

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
                               defaultValue={guests} id="guests" type="number"/>
                    </div>
                </div>
            </div>
            <div className="search-icon" onClick={() => navigate("/search", {state: {
                    citySelectedAtHome: selOpt
            }})}>
                <img src={SearchIcon} alt="Search"/>
            </div>
        </div>
    )
}