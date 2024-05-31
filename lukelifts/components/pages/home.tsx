import About from "../about";
import Programmes from "../programmes";
import EmailListSection from "../emailListSection";

const Home: React.FC = () => {
    return (
        <div id="home">
            {/* <!-- Body Content --> */}
            <div className="container content">
                <About />
                <Programmes />
                <EmailListSection />
            </div>
        </div>
    );
}

export default Home;