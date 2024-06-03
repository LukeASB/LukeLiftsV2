import Card from "./card";

const beginnerProgram = {
    name: "BEGINNER 12 WEEK PROGRAM",
    price: "£10.00",
    featureList: [
        "LEVEL: NOVICE",
        "DURATION: 12 WEEKS",
        "REQUIRES: BAR / WEIGHTS",
    ],
}
const intermediateProgram = {
    name: "INTERMEDIATE 12 WEEK PROGRAM",
    price: "£15.00",
    featureList: [
        "LEVEL: INTERMEDIATE",
        "DURATION: 12 WEEKS",
        "REQUIRES: BAR / WEIGHTS",
    ]
}
const personalProgram = {
    name: "PERSONAL 12 WEEK PROGRAM",
    price: "£20.00",
    featureList: [
        "PERSONALISED PROGRAM",
        "DURATION: 12 WEEKS",
        "REQUIRES: BAR / WEIGHTS",
    ]
}

const CardView: React.FC = () => {
    return (
        <>
            <Card
                name={beginnerProgram.name}
                level=""
                price={beginnerProgram.price}
                featureList={beginnerProgram.featureList}
                readMoreModal={{ id: "beginnerProgram", title: beginnerProgram.name, body: "Random Textttt" }}
                image="benchpress"
                payPalId="HPQXXNL6E4XGL"
                available={true}
            />
            <Card
                name={intermediateProgram.name}
                level=""
                price={intermediateProgram.price}
                featureList={intermediateProgram.featureList}
                readMoreModal={{ id: "intermediateProgram", title: intermediateProgram.name, body: "Random Textttt" }}
                image="deadlift"
                payPalId="WWWHS4QVZ5U4C"
                available={true}
            />
            <Card
                name={personalProgram.name}
                level=""
                price={personalProgram.price}
                featureList={personalProgram.featureList}
                readMoreModal={{ id: "personalProgram", title: personalProgram.name, body: "Random Textttt" }}
                image="squat"
                payPalId="77QKFZUT48UBN"
                available={true}
            />
        </>
    );
};

export default CardView;
