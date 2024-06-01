import { features } from "process";

interface ICard {
    name: string;
    level: string;
    price: string;
    featureList: string[];
    readMoreText: string;
    payPalId: string;
    available: boolean;
}

const generateCardFeatureList = (featureList: string[]) =>
    featureList.map((el, i) => <li key={`${i}_${el}`}>{el}</li>);

const Card: React.FC<ICard> = (card: ICard) => {
    return (
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 mb-4">
            <div className="card h-100">
                <div className="card-body">
                    <ul className="list-unstyled">
                        <li className="price h4">
                            <span>{card.name} </span>
                            {card.level}
                            <br></br>
                            {card.price}
                            <div className="trainingAndMealPlan mt-3">
                                <img
                                    src="https://via.placeholder.com/100"
                                    alt="Placeholder"
                                />
                            </div>
                        </li>
                        {generateCardFeatureList(card.featureList)}
                        <li>
                            <button
                                type="button"
                                className="btn btn-primary btn-custom robo popup-trigger popmake-680"
                                data-popup-id="680"
                                data-do-default="0"
                            >
                                Read More
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="card-footer">
                    <form
                        action="https://www.paypal.com/cgi-bin/webscr"
                        method="post"
                        target="_top"
                    >
                        <input type="hidden" name="cmd" value="_s-xclick" />
                        <input
                            type="hidden"
                            name="hosted_button_id"
                            value="77QKFZUT48UBN"
                        />{" "}
                        {/* Unique PayPal Value */}
                        <input
                            type="submit"
                            className={
                                card.available
                                    ? "btn btn-primary btn-custom w-100"
                                    : "btn btn-danger btn-custom w-100"
                            }
                            name={card.available ? "PURCHASE" : "UNAVAILABLE"}
                            value={card.available ? "PURCHASE" : "UNAVAILABLE"}
                            alt="PayPal – The safer, easier way to pay online!"
                            disabled={!card.available}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Card;
