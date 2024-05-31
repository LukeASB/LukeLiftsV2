import CardView from "./card/cardView";

const Programmes: React.FC = () => {
    return (
        <div id="programmes">
            <section className="container my-3 pb-3 sectionMinHeight sectionBorder">
                <div className="row text-center">
                    <h1>BEST PROGRAMS TO BUILD STRENGTH AND MUSCLE</h1>
                    <p>Find the plan most suited to your needs</p>
                    <div className="underline mx-auto my-4"></div>
                    <CardView />
                </div>
                <div className="row text-center mt-4">
                    <p>
                    (I offer a training programme & meal plan combination for the discounted price of £59.99 - £15 cheaper than buying both separately).
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Programmes;