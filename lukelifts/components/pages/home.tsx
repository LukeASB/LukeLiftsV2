import CardView from "../card/cardView";
import EmailListSection from "../emailListSection";

const Home: React.FC = () => {
    return (
        <div className="home">
            {/* <!-- Body Content --> */}
            <div className="container content">
                <h1 className="mt-5">Welcome to the Basic Bootstrap Website</h1>
                <p className="lead">This is a simple template to get you started with Bootstrap.</p>
                <CardView />
                <EmailListSection />
            </div>
        </div>
    );
}

export default Home;