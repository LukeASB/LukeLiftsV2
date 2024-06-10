interface IProgram {
    name: string,
    image: string,
    duration: string,
    price: string,
    paymentId: string,
    featureList: string[],
    modalId: string,
    modalBodyText: JSX.Element,
    available: boolean
}

export default IProgram;