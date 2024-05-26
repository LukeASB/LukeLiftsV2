import Home from "./pages/home";
import MainLayout from "./mainLayout";

interface IApp {
    page?: string;
}

/*
TO DO:
- Nav Bar
- Banner
- Card Section
- Join Email Section
- Footer
*/

const App: React.FC<IApp> = ({ page = ""}) => {
    const renderPage = () => {
        console.log(page);
        if (page === 'home') {
            return <Home />;
        }

        return (
            <h3>No component for navigation value. {page} not found</h3>
        );
    }

    return (
        <MainLayout>
            {renderPage()}
        </MainLayout>
    )
}

export default App;