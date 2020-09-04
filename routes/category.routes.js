const express = require("express");
const route = express.Router();

const categoryController = require("../controllers/categoryController");
const router = require("./order.routes");

router.get("/category", categoryController.getAll);
router.post("/category", categoryController.postOne);

module.exports = router;
