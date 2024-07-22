import CardView from "../card/cardView";
import ProgramInfo from "./programInfo";

const Programs: React.FC = () => {
    return (
        <div id="programs">
            <section className="container my-3 pb-3 sectionMinHeight sectionBorder text-black">
                <div className="row text-center">
                    <h1>BEST PROGRAMS TO BUILD STRENGTH AND MUSCLE</h1>
                    <p>Find the plan most suited to your needs</p>
                    <CardView />
                </div>
                <ProgramInfo />
            </section>
        </div>
    );
};

export default Programs;
