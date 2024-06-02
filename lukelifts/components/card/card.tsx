
import { features } from "process";
import Modal from "../modal";

interface ICard {
    name: string;
    level: string;
    price: string;
    featureList: string[];
    readMoreText: string;
    image: string;
    payPalId: string;
    available: boolean;
}

const generateCardFeatureList = (featureList: string[]) =>
    featureList.map((el, i) => <li key={`${i}_${el}`}>{el}</li>);

const Card: React.FC<ICard> = (card: ICard) => {
    return (
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 mb-4">
            <div className="card h-100">
                <div className="card-body bg-dark text-light border-light">
                    <ul className="list-unstyled">
                        <li className="price h4">
                            <span>{card.name} </span>
                            {card.level}
                            <br></br>
                            {card.price}
                            <div className="trainingAndMealPlan mt-3">
                                <img
                                    src={`../assets/${card.image}.png`}
                                    alt={card.image}
                                    className="img-fluid"
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
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Read More
                            </button>
                            <Modal
                                id="exampleModal"
                                title="Modal Title"
                                body="This is the body of the modal."
                             />
                        </li>
                    </ul>
                </div>
                <div className="card-footer bg-dark text-light border-light">
                    <form
                        action="https://www.paypal.com/cgi-bin/webscr"
                        method="post"
                        target="_top"
                    >
                        <input type="hidden" name="cmd" value="_s-xclick" />
                        <input
                            type="hidden"
                            name="hosted_button_id"
                            value={card.payPalId}
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
