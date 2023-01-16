const express = require("express");
const router = express.Router();

const admin = require("./modules/admin");
const projectController = require("../controllers/project-controller");
const userController = require("../controllers/user-controller");

const { generlErrorHandler } = require("../middleware/error-handler");

router.use("/admin", admin);
router.get("/signup", userController.signUpPage);
router.post("/signup", userController.signUp);
router.get("/projects", projectController.getProjects);
router.use("/", (req, res) => res.redirect("/projects"));
router.use("/", generlErrorHandler);

module.exports = router;
