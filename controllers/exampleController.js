const { errorCodes, CustomException } = require("../customError");
module.exports.throwError = async (req, res, next) => {
  //With reason
  next(await CustomException(errorCodes.errorType1, "Example reason"));

  //Without reason
  //next(await CustomException(errorCodes.errorType2))
};
