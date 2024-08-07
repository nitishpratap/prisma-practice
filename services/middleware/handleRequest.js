

const indexRoute = require('../../routes/index')
const handleRequest = (app)=>{
    app.use("/",indexRoute);
}

module.exports = handleRequest;
/**
 * Adding comment in dev
 * suppose this is code in dev and i need to cherry pick this in prod
 */
