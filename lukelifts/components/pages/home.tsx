import About from "../about";
import Programs from "../programs";
import EmailListSection from "../emailListSection";

const Home: React.FC = () => {
    return (
        <div id="home">
            {/* <!-- Body Content --> */}
            <div className="container content">
                <About />
                <Programs />
                <EmailListSection />
            </div>
        </div>
    );
};

export default Home;
