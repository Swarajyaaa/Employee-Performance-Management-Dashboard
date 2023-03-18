const express = require("express");
const {  plannedVsCompleteTask, allProjects, allMembers } = require("../controllers/controllers");
const router = express.Router();

router.get('/pvct', plannedVsCompleteTask)
router.get('/projects',allProjects)
router.get('/projects/:id/membership',allMembers)

module.exports = router;