import Home from "./pages/home";
import MainLayout from "./mainLayout";
import IApp from "../shared/interfaces/IApp";

const App: React.FC<IApp> = ({ page = "" }) => {
    const renderPage = () => {
        if (page === "home") {
            return <Home />;
        }

        return <h3>No component for navigation value. {page} not found</h3>;
    };

    return <MainLayout>{renderPage()}</MainLayout>;
};

export default App;
