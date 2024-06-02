import Card from "./card";

const CardView: React.FC = () => {
    return (
        <>
            <Card
                name="BEGINNER 12 WEEK PROGRAM"
                level=""
                price="£10.00"
                featureList={[
                    "LEVEL: NOVICE",
                    "DURATION: 12 WEEKS",
                    "REQUIRES: BAR / WEIGHTS",
                ]}
                readMoreText=""
                image="benchpress"
                payPalId="HPQXXNL6E4XGL"
                available={true}
            />
            <Card
                name="INTERMEDIATE 12 WEEK PROGRAM"
                level=""
                price="£15.00"
                featureList={[
                    "LEVEL: INTERMEDIATE",
                    "DURATION: 12 WEEKS",
                    "REQUIRES: BAR / WEIGHTS",
                ]}
                readMoreText=""
                image="deadlift"
                payPalId="WWWHS4QVZ5U4C"
                available={true}
            />
            <Card
                name="PERSONAL 12 WEEK PROGRAM"
                level=""
                price="£20.00"
                featureList={[
                    "PERSONALISED PROGRAM",
                    "DURATION: 12 WEEKS",
                    "REQUIRES: BAR / WEIGHTS",
                ]}
                readMoreText=""
                image="squat"
                payPalId="77QKFZUT48UBN"
                available={true}
            />
        </>
    );
};

export default CardView;
