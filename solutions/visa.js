const checkVisa = (cardNumber) => {
    const pattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
    return pattern.exec(cardNumber)
};

export default checkVisa;