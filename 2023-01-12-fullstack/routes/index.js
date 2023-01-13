const express = require("express");
const router = express.Router();

const projectController = require("../controllers/project-controller");
const admin = require("./modules/admin");

router.use("/admin", admin);
router.get("/projects", projectController.getProjects);
router.use("/", (req, res) => res.redirect("/projects"));

module.exports = router;
