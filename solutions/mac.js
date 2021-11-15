const checkMac = (macNumber) => {
    const pattern = /^([0-9a-fA-F]{2}[:.-]){5}[0-9a-fA-F]{2}$/;
    return pattern.exec(macNumber)
};

export default checkMac;