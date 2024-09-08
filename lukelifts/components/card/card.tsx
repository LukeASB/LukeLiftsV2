import Modal from "../modal";
import ICard from "../../shared/interfaces/ICard";
import PayPalButton from "../payments/payPalButton";
import StripePaymentButton from "../payments/stripePaymentButton";

const generateCardFeatureList = (featureList: string[]) =>
    featureList.map((el, i) => <li key={`${i}_${el}`}>{el}</li>);

const Card: React.FC<ICard> = (card: ICard) => {
    return (
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 mb-4">
            <div className="card h-100">
                <div className="card-body bg-light text-black border-black">
                    <ul className="list-unstyled">
                        <li className="price h4">
                            <span>{card.name} </span>
                            <br></br>
                            {card.duration}
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
                                data-bs-target={`#${card.readMoreModal.id}`}
                            >
                                Read More
                            </button>

                            <Modal
                                id={card.readMoreModal.id}
                                title={card.readMoreModal.title}
                                body={card.readMoreModal.body}
                            />
                        </li>
                    </ul>
                </div>
                <div className="card-footer bg-light text-black border-grey">
                    {/* <PayPalButton id={card.payPalId} available={card.available}/> */}
                    <StripePaymentButton paymentURL={card.stripPaymentUrl} available={card.available} />
                </div>
            </div>
        </div>
    );
};

export default Card;
