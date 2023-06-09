const express = require("express");
const {  plannedVsCompleteTask, allProjects,getMeetings, allMembers,issuesByUserId ,test,timeEntryByUserID,allIssuesOfProject,singleProject,totalHoursByProject} = require("../controllers/controllers");
const router = express.Router();

router.get('/pvct', plannedVsCompleteTask)
router.get('/projects',allProjects)
router.get('/projects/:id',singleProject)
router.get('/projects/:id/membership',allMembers)
router.get('/issues/:project_id',allIssuesOfProject)
router.get('/totalHoursByProject/:project_id',totalHoursByProject)
router.get('/meetings',getMeetings)
router.get('/timeEntries/:user_id/:project_id' , timeEntryByUserID)
router.get('/issues/:user_id/:project_id',issuesByUserId)

// router.get('/test',test)
// router.get('/workHoursByProject',workHoursByPersonPerProject )

module.exports = router;