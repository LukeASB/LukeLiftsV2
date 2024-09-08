import IModal from "./IModal";

interface ICard {
    name: string;
    duration: string;
    price: string;
    featureList: string[];
    readMoreModal: IModal;
    image: string;
    payPalId: string;
    stripPaymentUrl: string;
    available: boolean;
}

export default ICard;