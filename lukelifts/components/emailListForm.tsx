import { FormEvent } from "react";

const handleSubmit  = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
}

const EmailListForm: React.FC = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <form
                            action="https://app.us13.list-manage.com/subscribe/post?u=d06948fb9179aa3a7d39c4da2&amp;id=821aa5c2f5&amp;f_id=0078f0e1f0"
                            method="post"
                            id="mc-embedded-subscribe-form"
                            name="mc-embedded-subscribe-form"
                            className="validate"
                            target="_self"
                            noValidate
                        >
                            <div className="form-group mb-3">
                                <label htmlFor="mce-EMAIL" className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    name="EMAIL"
                                    placeholder="Enter your email"
                                    className="form-control bg-dark text-light w-100"
                                    id="mce-EMAIL"
                                    required
                                />
                            </div>

                            <div
                                aria-hidden="true"
                                style={{ position: "absolute", visibility: "hidden" }}
                            >
                                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                                <input
                                    type="text"
                                    name="b_d06948fb9179aa3a7d39c4da2_821aa5c2f5"
                                    tabIndex={-1}
                                />
                            </div>

                            <div className="form-group">
                                <button
                                    type="submit"
                                    name="subscribe"
                                    id="mc-embedded-subscribe"
                                    className="btn btn-primary w-100"
                                >
                                    GET FREE PROGRAM NOW
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailListForm;