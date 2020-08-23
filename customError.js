const errorMessages = {
    // Function version
    100000: function (reason = undefined) {
        return reason ? "With reason: " + reason : "Without reason"
    },
    // Standart version
    100001: "Example Error Code"
};

const errorCodes = {
    errorType1: "100000",
    errorType2: "100001"
}

async function CustomException(errorCode, reason = undefined) {
    if (typeof errorMessages[errorCode] === "function") {
        var error = new Error(errorMessages[errorCode](reason));
    } else {
        var error = new Error(errorMessages[errorCode]);
    }
    error.code = errorCode;
    return error;
}

CustomException.prototype = Object.create(Error.prototype);

module.exports = {
    errorCodes,
    CustomException
}
