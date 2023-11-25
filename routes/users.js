const express = require('express');
const router = express.Router();
const client = require('../client');

/* GET users listing. */
router.get('/', async function (req, res, next) {
    // const result = await client.get('user');
    // if(result) {
    //     res.json(JSON.parse(result));
    //     return
    // }
    // let response = fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(json => {
    //         client.set('user',JSON.stringify(json ));
    //         res.json(json).status(200);
    //     })
});

module.exports = router;
