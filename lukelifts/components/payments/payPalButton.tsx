import IPayPalButton from "../../shared/interfaces/IPayPalButton";

const PayPalButton: React.FC<IPayPalButton> = (payPalBtn: IPayPalButton) => {
    return (
        <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
        >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
                type="hidden"
                name="hosted_button_id"
                value={payPalBtn.id}
            />{" "}
            {/* Unique PayPal Value */}
            <input
                type="submit"
                className={
                    payPalBtn.available
                        ? "btn btn-primary btn-custom w-100"
                        : "btn btn-danger btn-custom w-100"
                }
                name={payPalBtn.available ? "PURCHASE" : "UNAVAILABLE"}
                value={payPalBtn.available ? "PURCHASE" : "UNAVAILABLE"}
                alt="PayPal – The safer, easier way to pay online!"
                disabled={!payPalBtn.available}
            />
        </form>
    )
}

export default PayPalButton;