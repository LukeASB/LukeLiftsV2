import { ReactNode } from "react";
import Navbar from "./navBar";
import Footer from "./footer";
import Banner from "./banner";

interface IMainLayout {
    children?: ReactNode
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
    return (
        <div className="mainLayout">
            <Navbar/>
            <header><Banner /></header>
            <main>
                { children }
            </main>
            <Footer/>
        </div>
    )
}

export default MainLayout;