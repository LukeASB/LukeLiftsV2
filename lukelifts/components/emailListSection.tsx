import EmailListForm from "./emailListForm";

const EmailListSection: React.FC = () => {
    return (
        <div id="join">
            <div className="container my-3 pb-3 sectionMinHeight text-light">
                <section className="container my-5">
                    <div className="row align-items-start">
                        <div className="col-md-6">
                            <h1>STAY UPDATED</h1>
                            <h2>Join Up For a Free LukeLifts Program</h2>
                            <p>
                                Join the LukeLifts community to get FREE access
                                to a LukeLifts program.
                            </p>
                            <p>
                                Enter your email below to sign up today for FREE
                            </p>
                            <EmailListForm />
                        </div>
                        <div className="col-md-6">
                            <img
                                src="https://via.placeholder.com/400"
                                alt="Placeholder"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default EmailListSection;
