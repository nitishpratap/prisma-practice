/**
 * handle returning the error response
 * @param errCode {string}
 * @param req
 * */
const {response} = require("express");
module.exports.errorHandler = (errCode, req) => {
    let path = req.originalUrl; // get path of the request
    //return the error object to return
    return handleErrorByApi(errCode, path); //return the error response
}

/**
 * handle the error codes by api
 * @param errCode {string} error code
 * @param path
 */
const handleErrorByApi = (errCode, path) => {
    const pathArray = path.split('/')
    const api = pathArray[1].split('?')[0]; // to retrieve the value of api if params are also passed
    //the response to be returned on complication of function
    const response = {
        code: errCode,
        reason: "An Application Error has occurred"
    }
    //handle the cases based on api
    switch (api) {
        case 'index':
            handleIndex(errCode, response);
            break;
        default:
            response.reason = "Internal error";
    }
    return response; //return the error response
}

const handleIndex = (errCode, response) => {
    switch (errCode) {
        default :
            response.reason = "Internal Error"
            break
    }
    console.log(response)
}
