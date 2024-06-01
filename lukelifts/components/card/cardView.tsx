import Card from "./card";

const CardView: React.FC = () => {
    return (
        <>
            <Card
                name="BEGINNER 12 WEEK PROGRAM"
                level="LEVEL: BEGINNER"
                price="£10.00"
                featureList={[
                    "LEVEL: NOVICE",
                    "DURATION: 12 WEEKS",
                    "REQUIRES: BAR / WEIGHTS",
                ]}
                readMoreText=""
                payPalId="HPQXXNL6E4XGL"
                available={true}
            />
            <Card
                name="12 Week Program"
                level="Intermediate"
                price="£15.00"
                featureList={[
                    "LEVEL: INTERMEDIATE",
                    "DURATION: 12 WEEKS",
                    "REQUIRES: BAR / WEIGHTS",
                ]}
                readMoreText=""
                payPalId="WWWHS4QVZ5U4C"
                available={true}
            />
            <Card
                name="Personal 12 Week Program"
                level="Any"
                price="£20.00"
                featureList={[
                    "PERSONALISED PROGRAM",
                    "DURATION: 12 WEEKS",
                    "REQUIRES: BAR / WEIGHTS",
                ]}
                readMoreText=""
                payPalId="77QKFZUT48UBN"
                available={true}
            />
        </>
    );
};

export default CardView;
