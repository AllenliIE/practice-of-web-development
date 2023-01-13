const express = require("express");
const router = express.Router();

const adminController = require("../../controllers/admin-controller");

router.get("/projects", adminController.getProjects);
router.use("/", (req, res) => res.redirect("/admin/projects"));

module.exports = router;
