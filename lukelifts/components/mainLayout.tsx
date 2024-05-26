import { ReactNode } from "react";
import Navbar from "./navBar";
import Footer from "./footer";
import EmailListSection from "./emailListSection";
import CardView from "./card/cardView";
import Banner from "./banner";

interface IMainLayout {
    children?: ReactNode
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
    return (
        <>
        <header><Banner /></header>
        <Navbar/>
        <main>
            { children }
            <CardView />
            <EmailListSection />
        </main>
        <Footer />
        </>
    )
}

export default MainLayout;