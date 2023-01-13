const express = require("express");
const router = express.Router();

const projectController = require("../controllers/project-controller");

router.get("/projects", projectController.getProjects);
router.use("/", (req, res) => res.redirect("/projects"));

module.exports = router;
