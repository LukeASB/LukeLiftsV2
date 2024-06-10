import Card from "./card";
import IProgram from "../../shared/interfaces/IProgram";

const beginnerProgram: IProgram = {
    name: "BEGINNER",
    image: "benchpress",
    duration: "12 WEEK PROGRAM",
    price: "£10.00",
    paymentId: "HPQXXNL6E4XGL",
    featureList: [
        "LEVEL: NOVICE",
        "DURATION: 12 WEEKS",
        "REQUIRES: BAR / WEIGHTS",
    ],
    modalId: "beginnerProgram",
    modalBodyText: (
        <div>
            <p>
                New lifter that wants a program to guide them in your pursuit to
                get bigger and stronger?
            </p>
            <p>Then this program is targeted at you.</p>
            <p>
                Start getting stronger and building muscle today with this
                workout. Pick up the program today, learn how the program works,
                which exercises to do, how many sets and reps, how long to rest
                between sets, how to progress, what to do after, and more...
            </p>
        </div>
    ),
    available: true
};
const intermediateProgram: IProgram = {
    name: "INTERMEDIATE",
    image: "deadlift",
    duration: "12 WEEK PROGRAM",
    price: "£20.00",
    paymentId: "WWWHS4QVZ5U4C",
    featureList: [
        "LEVEL: INTERMEDIATE",
        "DURATION: 12 WEEKS",
        "REQUIRES: BAR / WEIGHTS",
    ],
    modalId: "intermediateProgram",
    modalBodyText: (
        <div>
            <p>Struggling to make any more easy beginner gains?</p>
            <p>
                <strong>Pre-requisites:</strong>
            </p>
            <ul>
                <li>
                    You know how to Squat, Deadlift, Bench Press with proper
                    form suited for your body.
                </li>
                <li>
                    You&apos;ve hit a plateau. You&apos;ve been stuck at the
                    same weight on several exercises for weeks.
                </li>
                <li>
                    You want to keep building strength, power and muscle by
                    training 3x/week.
                </li>
                <li>You&apos;re no longer having fun.</li>
            </ul>
            <p>Then this program is targeted at you.</p>
            <p>
                LukeLifts Intermediate program helps you break through plateaus
                that you&apos;ve reached on LukeLifts Beginner program or any
                other beginner programs. It helps you lift more weight and
                increase your strength. It does this by using three simple
                workouts every week.
            </p>
            <p>
                Pick up the program now, learn what you need to do to progress,
                break your plateaus and progress again. The program will tell
                you what weights to use, what exercises to do, how many sets and
                reps, how long to rest between sets, and more.
            </p>
        </div>
    ),
    available: true
};
const personalProgram: IProgram = {
    name: "PERSONAL",
    image: "squat",
    duration: "12 WEEK PROGRAM",
    price: "£30.00",
    paymentId: "77QKFZUT48UBN",
    featureList: [
        "PERSONALISED PROGRAM",
        "DURATION: 12 WEEKS",
        "REQUIRES: BAR / WEIGHTS",
    ],
    modalId: "personalProgram",
    modalBodyText: (
        <div>
            <p>Need a personalised program to help you progress?</p>
            <p>
                Feel free to reach out to get my help and I&apos;ll make you a
                program suited to your individual needs.
            </p>
            <p>
                The program will tell you how to progress, how programs work,
                which exercises to do, how many sets and reps, how long to rest
                between sets, what to do after, and more...
            </p>
            <p>
                After purchasing a program, you will receive an email with the
                program attached for you to follow.
            </p>
            <p>
                For the personalised program, you will receive a Client Details
                Form via e-mail within 24 hours (please check your junk folder
                if you don&apos;t see this in your inbox).
            </p>
            <p>
                Complete the form to the best of your knowledge to enable me to
                personalise your plan as accurately as possible and then send it
                back to me. You will then receive your plan within 5-7 calendar
                days.
            </p>
        </div>
    ),
    available: true
};

const programs: IProgram[] = [
    beginnerProgram,
    intermediateProgram,
    personalProgram
];

const CardView: React.FC = () => {
    debugger;
    return (
        <>
            {programs.map((program, i) => {
                return (
                    <Card
                        key={`${program}_${i}`}
                        name={program.name}
                        duration={program.duration}
                        price={program.price}
                        featureList={program.featureList}
                        readMoreModal={{
                            id: program.modalId,
                            title: program.name,
                            body: program.modalBodyText,
                        }}
                        image={program.image}
                        payPalId={program.paymentId}
                        available={program.available}
                    />
                )
            })}
        </>
    );
};

export default CardView;
