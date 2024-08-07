

const indexRoute = require('../../routes/index')
const handleRequest = (app)=>{
    app.use("/",indexRoute);
}

module.exports = handleRequest;
