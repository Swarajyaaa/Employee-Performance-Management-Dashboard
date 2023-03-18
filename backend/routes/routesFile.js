const express = require("express");
const {  plannedVsCompleteTask, allProjects, allMembers, allIssuesOfProject,singleProject} = require("../controllers/controllers");
const router = express.Router();

router.get('/pvct', plannedVsCompleteTask)
router.get('/projects',allProjects)
router.get('/projects/:id',singleProject)
router.get('/projects/:id/membership',allMembers)
router.get('/issues/:project_id',allIssuesOfProject)

module.exports = router;