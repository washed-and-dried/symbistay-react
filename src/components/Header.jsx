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

    return (<>
        <header className="main-header">
            <nav className={"main-nav"}>
                <div className="nav-links">
                    <a className={"nav-logo"} href={"/"}><img src={SymbiStayIcon} alt="Symbi Stay"/></a>
                    <NavLink className={"nav-text"} to={"/"}>Home</NavLink>
                    <NavLink className={"nav-text"} to={"/search"}>Search</NavLink>
                    <NavLink className={"nav-text"} to={"/contact"}>Contact</NavLink>
                    <NavLink className={"nav-text"} to={"/profile"}>Profile</NavLink>
                </div>
                {/*FIXME: make this work!*/}
                <img src={ProfileIcon} onClick={handleProfileIconClick} alt="Profile" className={"profile-icon"}/>
                <dialog className={"profile-icon-dialog"} ref={dialogRef}>
                    <button>Account</button>
                    <button>Sign Out</button>
                    <button>What else?</button>
                </dialog>
            </nav>
        </header>

    </>)
}