import EmailListForm from "./emailListForm";

const EmailListSection: React.FC = () => {
    return (
        <div id="join">
            <section className="container my-3 pb-3 sectionMinHeight text-light">
                <div className="row text-center">
                    <h1>STAY UPDATED</h1>
                    <h2>Join Up For a Free LukeLifts Program</h2>
                    <p>
                        Join the LukeLifts community to get a FREE LukeLifts
                        program.
                    </p>
                    <p>Enter your email below to sign up today for FREE</p>
                    <EmailListForm />
                </div>
            </section>
        </div>
    );
};

export default EmailListSection;
