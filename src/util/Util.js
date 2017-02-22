const Constants = require("./Constants");

class Util {
    fetchIn(string, start, end) {
        let startString = string.indexOf(start);
        if (startString === -1) return "";

        let slicedString = string.slice(startString + start.length);

        let endString = slicedString.indexOf(end);
        if (endString === -1) return "";

        let newString = slicedString.slice(0, endString);
        return newString;
    }

    buildError(code, err) {
        let error = Constants.ERRORS[code];
        let errorObject = { code: code, message: error };
        if (err) Object.assign(errorObject, { ytmessage: err });
        return errorObject;
    }
}

module.exports = Util;
