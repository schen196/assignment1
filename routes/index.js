var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
	res.render("pages/homepage");
});

/* GET about page. */
router.get("/about", (req, res) => {
	res.render("pages/about");
});

/* GET contact page. */
router.get("/contact", (req, res) => {
	res.render("pages/contact");
});

/* GET services page. */
router.get("/services", (req, res) => {
	res.render("pages/services");
});

/* GET projects page. */
router.get("/projects", (req, res) => {
	res.render("pages/projects");
});

module.exports = router;
