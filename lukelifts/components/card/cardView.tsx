import { ModalBody } from "react-bootstrap";
import Card from "./card";
import IProgram from "../../shared/interfaces/IProgram";

const beginnerProgram: IProgram = {
    name: "BEGINNER",
    duration: "12 WEEK PROGRAM",
    price: "£10.00",
    featureList: [
        "LEVEL: NOVICE",
        "DURATION: 12 WEEKS",
        "REQUIRES: BAR / WEIGHTS",
    ],
    modalBodyText: (<div>
        <p>New lifter that wants a program to guide them in your pursuit to get bigger and stronger?</p>
        <p>Then this program is targeted at you.</p>
        <p>Start getting stronger and building muscle today with this workout. Pick up the program today, learn how the program works, which exercises to do, how many sets and reps, how long to rest between sets, how to progress, what to do after, and more...</p>
    </div>)
}
const intermediateProgram: IProgram = {
    name: "INTERMEDIATE",
    duration: "12 WEEK PROGRAM",
    price: "£15.00",
    featureList: [
        "LEVEL: INTERMEDIATE",
        "DURATION: 12 WEEKS",
        "REQUIRES: BAR / WEIGHTS",
    ],
    modalBodyText: (<div>
        <p>Struggling to make any more easy beginner gains?</p>
        <p><strong>Pre-requisites:</strong></p>
        <ul>
            <li>You know how to Squat, Deadlift, Bench Press with proper form suited for your body.</li>
            <li>You&apos;ve hit a plateau. You&apos;ve been stuck at the same weight on several exercises for weeks.</li>
            <li>You want to keep building strength, power and muscle by training 3x/week.</li>
            <li>You&apos;re no longer having fun.</li>
        </ul>
        <p>Then this program is targeted at you.</p>
        <p>LukeLifts Intermediate program helps you break through plateaus that you&apos;ve reached on LukeLifts Beginner program or any other beginner programs. It helps you lift more weight and increase your strength. It does this by using three simple workouts every week.</p>
        <p>Pick up the program now, learn what you need to do to progress, break your plateaus and progress again. The program will tell you what weights to use, what exercises to do, how many sets and reps, how long to rest between sets, and more.</p>
    </div>)
}
const personalProgram: IProgram = {
    name: "PERSONAL",
    duration: "12 WEEK PROGRAM",
    price: "£20.00",
    featureList: [
        "PERSONALISED PROGRAM",
        "DURATION: 12 WEEKS",
        "REQUIRES: BAR / WEIGHTS",
    ],
    modalBodyText: (<div>
        <p>Need a personalised program to help you progress?</p>
        <p>Feel free to reach out to get my help and I&apos;ll make you a program suited to your individual needs.</p>
        <p>The program will tell you how to progress, how programs work, which exercises to do, how many sets and reps, how long to rest between sets, what to do after, and more...</p>
        <p>After purchasing a program, you will receive an email with the program attached for you to follow.</p>
        <p>For the personalised program, you will receive a Client Details Form via e-mail within 24 hours (please check your junk folder if you don&apos;t see this in your inbox).</p>
        <p>Complete the form to the best of your knowledge to enable me to personalise your plan as accurately as possible and then send it back to me. You will then receive your plan within 5-7 calendar days.</p>
    </div>)
}

const CardView: React.FC = () => {
    return (
        <>
            <Card
                name={beginnerProgram.name}
                duration={beginnerProgram.duration}
                price={beginnerProgram.price}
                featureList={beginnerProgram.featureList}
                readMoreModal={{ id: "beginnerProgram", title: beginnerProgram.name, body: beginnerProgram.modalBodyText }}
                image="benchpress"
                payPalId="HPQXXNL6E4XGL"
                available={true}
            />
            <Card
                name={intermediateProgram.name}
                duration={intermediateProgram.duration}
                price={intermediateProgram.price}
                featureList={intermediateProgram.featureList}
                readMoreModal={{ id: "intermediateProgram", title: intermediateProgram.name, body: intermediateProgram.modalBodyText }}
                image="deadlift"
                payPalId="WWWHS4QVZ5U4C"
                available={true}
            />
            <Card
                name={personalProgram.name}
                duration={personalProgram.duration}
                price={personalProgram.price}
                featureList={personalProgram.featureList}
                readMoreModal={{ id: "personalProgram", title: personalProgram.name, body: personalProgram.modalBodyText }}
                image="squat"
                payPalId="77QKFZUT48UBN"
                available={true}
            />
        </>
    );
};

export default CardView;
