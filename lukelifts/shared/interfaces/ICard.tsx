import IModal from "./IModal";

interface ICard {
    name: string;
    level: string;
    price: string;
    featureList: string[];
    readMoreModal: IModal;
    image: string;
    payPalId: string;
    available: boolean;
}

export default ICard;