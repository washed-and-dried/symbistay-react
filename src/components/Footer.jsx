import SymbiStayLogo from "../assets/icons/symbistay.svg"

//Imports for the SVGS from :/src/assets/footer/*
import MetaLogo from "../assets/svgs/footer/meta.svg"
import TwitterLogo from "../assets/svgs/footer/twitter.svg"
import YoutubeLogo from "../assets/svgs/footer/youtube.svg"
import CallIcon from "../assets/svgs/footer/call_icon.svg"
import MailIcon from "../assets/svgs/footer/mail_icon.svg"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-cont">
                <img src={SymbiStayLogo} alt="Symbi Stay"/>
                <div className="socials">
                    <img src={MetaLogo} alt="Meta Logo"/>
                    <img src={TwitterLogo} alt="Twitter Logo"/>
                    <img src={YoutubeLogo} alt="Youtube Logo"/>
                </div>
                <label htmlFor="currency"></label>
                <select name="currency" id="currency">
                    <option value="inr">INR</option>
                    <option value="usd">USD</option>
                    <option value="cad">CAD</option>
                </select>
            </div>

            <div className="footer-cont">
                <div className="footer-title">CONTACT</div>

                <div className="footer-col">
                    <img src={CallIcon} alt="Call Icon"/>
                    +91 9092800001
                </div>
                <div className="footer-col">
                    <img src={MailIcon} alt="Mail Icon"/>
                    contact@symbistay.com
                </div>
            </div>

            <div className="footer-cont">
                <div className="footer-title">ADDRESS</div>
                <div className="footer-col">SB Road</div>
                <div className="footer-col">Shivajinagar, 411016</div>
                <div className="footer-col">Pune, Maharashtra</div>
            </div>

            <div className="footer-cont">
                <div className="footer-title">EXPLORE</div>

                {/*FIXME: Replace the anchor tags with Navlink tags and point them to correct components*/}
                <div className="footer-col"><a>Privacy Policy</a></div>
                <div className="footer-col"><a>Terms of Service</a></div>
                <div className="footer-col"><a>Developers</a></div>
                <div className="footer-col"><a>Contributing</a></div>
            </div>
    </div>
)}