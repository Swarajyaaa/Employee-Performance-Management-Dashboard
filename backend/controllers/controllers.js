const axios = require('axios');
require('dotenv').config();
const { STATUS_OK, STATUS_BAD_REQUEST } = require('../constants/constants');
const BASE_URL = 'http://svn.aps1aws.lumiq.int/'
const API_KEY = process.env.KEY;

const plannedVsCompleteTask = async (req,res) => {
    try {
        const allProjectsResponse = await axios.get(BASE_URL + 'projects.json?key=' + API_KEY);
        const allProjects = allProjectsResponse.data.projects;
        for (let i = 0;i<1;i++){
            const projectIssueResponse = await axios.get(BASE_URL + 'issues.json?project_id=' + 27 + '&tracker_id=' + 8 +  '&key=' + API_KEY+'&limit=' + 10000);
            const taskProjectIssues = projectIssueResponse.data;
            const projectIssueResponse2 = await axios.get(BASE_URL + 'issues.json?project_id=' + 27 + '&tracker_id=' + 8 +  '&key=' + API_KEY+'&offset=100&limit=' + 10000);
            const taskProjectIssues2 = projectIssueResponse.data;
            console.log('hello',taskProjectIssues)
            console.log('hello2',taskProjectIssues2)
        }
        res.status(STATUS_OK).send(allProjects.projects);
    }catch(e){
        res.status(STATUS_BAD_REQUEST).json(e.message);
    }
}

const allProjects = async (req,res) => {
    try {
        const allProjectsResponse = await axios.get(BASE_URL + 'projects.json?key=' + API_KEY);
        const projects = allProjectsResponse.data;
        res.send(projects);
    }catch(e){
        res.status(STATUS_BAD_REQUEST).json(e.message);
    }
}

const allMembers = async (req,res) => {
    const { id } = req.params;
    try {
        const allMembersResponse = await axios.get(BASE_URL + 'projects/' + id + '/memberships.json?key=' + API_KEY);
        const members = allMembersResponse.data;
        res.send(members);
    }catch(e){
        res.status(STATUS_BAD_REQUEST).json(e.message);
    }
}

const allIssuesOfProject = async (req,res) =>{
    const { project_id } = req.params;
    try {
        const allIssuesResponse = await axios.get(BASE_URL + 'issues.json?project_id=' + project_id + '&key=' + API_KEY);
        const allIssues = allIssuesResponse.data;
        res.send(allIssues);
    }catch(e){
        res.status(STATUS_BAD_REQUEST).json(e.message);
    }
}

const singleProject = async (req,res) => {
    const {id} = req.params;
    try {
        const singleProjectResponse = await axios.get(BASE_URL + 'projects/' + id + '.json?' +'key=' + API_KEY);
        const project = singleProjectResponse.data;
        res.send(project);
    }catch(e){
        res.status(STATUS_BAD_REQUEST).json(e.message);
    }
}

module.exports = {
    plannedVsCompleteTask,
    allProjects,
    allMembers,
    allIssuesOfProject,
    singleProject
}

/*
 try {
        const response = await axios.get(BASE_URL + 'issues.json?key=f10a774408fc14fc1cbbc5aa360988e3bae52f44', {headers: {'Access-Control-Allow-Origin': '*'}, mode: 'no-cors'});
        const data = response.data;
        res.send(data);
      } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }

*/