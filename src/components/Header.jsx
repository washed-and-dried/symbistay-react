import {NavLink} from "react-router-dom";
import "../styles/styles.css"
import SymbiStayIcon from "../assets/icons/symbistay.svg"
import ProfileIcon from "../assets/icons/profile.png"
import {useRef} from "react";

export default function Header() {
    const dialogRef = useRef();

    const handleProfileIconClick = () => {
        dialogRef.current?.toggleAttribute("open")
    }

    return (
        <>
            <header>
                <nav className={"main-nav"}>
                    <div className="nav-links">
                        <NavLink to={"/"}><img src={SymbiStayIcon} alt="Symbi Stay"/></NavLink>
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/search"}>Search</NavLink>
                        <NavLink to={"/contact"}>Contact</NavLink>
                        <NavLink to={"/profile"}>Profile</NavLink>
                    </div>
                    <img src={ProfileIcon} onClick={handleProfileIconClick} alt="Profile" className={"profile-icon"}/>
                    <dialog className={"profile-icon-dialog"} ref={dialogRef}>
                        <button>Account</button>
                        <button>Sign Out</button>
                        <button>What else?</button>
                    </dialog>
                </nav>
            </header>

        </>
    )
}