import IStripePaymentButton from "../../shared/interfaces/IStripePaymentButton";

const StripePaymentButton: React.FC<IStripePaymentButton>= (stripePaymentButton: IStripePaymentButton) => {
    return (
        <button
        type="button"
        className={
            stripePaymentButton.available
                ? "btn btn-primary btn-custom w-100"
                : "btn btn-danger btn-custom w-100"
        }
        disabled={!stripePaymentButton.available}
        onClick={ () => window.location.href= stripePaymentButton.paymentURL}
        >
            Buy Program
        </button>
    );
}

export default StripePaymentButton;