import Header from "./components/Header.jsx";
import Routing from "./components/Routing.jsx";
import Footer from "./components/Footer";
import './styles/styles.css'

export default function App() {
    return (
        <>
            <div className={"app-container"}>
                <Header/>
                <main className="content-main">
                    <div className="content-container">
                        <Routing/>
                    </div>
                </main>
                <Footer/>
            </div>
        </>
    )
}