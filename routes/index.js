const express = require('express');
const router = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();
/* GET home page. */
router.get('/', async function (req, res, next) {
  let x = await prisma.student.findMany({})
  res.json(x);
});

module.exports = router;
