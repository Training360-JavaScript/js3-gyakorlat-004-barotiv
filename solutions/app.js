import checkVisa from './visa.js';
import checkIP from './ip.js';
import checkMac from './mac.js';

const checker = {
    rules: {
        checkIP,
        checkMac,
        checkVisa
    },
    validate(text, type) {
        if (type === 'visa') {
            return checkVisa(text)
        } else if (type === 'ip') {
            return checkIP(text)
        } else if (type === 'mac') {
            return checkMac(text)
        }
    }
};

export default checker;