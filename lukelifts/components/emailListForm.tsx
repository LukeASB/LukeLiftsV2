import { FormEvent } from "react";

const handleSubmit  = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
}

const EmailListForm: React.FC = () => {
    return (
        <form
            action="https://app.us13.list-manage.com/subscribe/post?u=d06948fb9179aa3a7d39c4da2&amp;id=821aa5c2f5&amp;f_id=0078f0e1f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_self"
            // noValidate
            // onSubmit={handleSubmit}
        >
            <div className="mb-3">
                <input
                    type="email"
                    name="EMAIL"
                    placeholder="Enter your email"
                    className="required email bg-dark text-light"
                    id="mce-EMAIL"
                    required
                />
            </div>

            <div
                aria-hidden="true"
                style={{ position: "absolute", left: "-5000px" }}
            >
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                <input
                    type="text"
                    name="b_d06948fb9179aa3a7d39c4da2_821aa5c2f5"
                    tabIndex={-1}
                />
            </div>

            <div>
                <button
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="btn btn-primary"
                    value="Subscribe"
                >
                    GET FREE PROGRAM NOW
                </button>
            </div>
        </form>
    );
};

export default EmailListForm;

{
    /* <form action="https://app.us13.list-manage.com/subscribe/post?u=d06948fb9179aa3a7d39c4da2&amp;id=821aa5c2f5&amp;f_id=0078f0e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
<div className="mb-3">
    <input
        type="email"
        className="form-control"
        placeholder="Enter your email"
        aria-label="Enter your email"
        required
    />
</div>
<div>
    <button
        className="btn btn-primary"
        type="submit"
    >
        GET FREE PROGRAM NOW
    </button>
</div>
</form> */
}
