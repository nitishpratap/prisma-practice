const {respond} = require("../services/middleware/respond");
const {errorHandler} = require("../utils/errorCode")
const index = {
    getIndex : async (req,res)=>{
        try {
            let x = {
                name : "Nitish"
            }
            respond(res,x);
        }catch (err){
            req.log.info("error occurred while getting forms :: ", error)
            respond(res, errorHandler("500", req))
        }
    }
}
module.exports = index
