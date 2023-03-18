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

const totalHoursByProject = async (req,res) => {
    const { project_id } = req.params;
    try {
        const timeEntriesResponse = await axios.get(BASE_URL + 'time_entries.json?project_id=' + project_id + '&key=' + API_KEY);
        const timeEntries = timeEntriesResponse.data;
        res.send(timeEntries);
    }catch(e){
        res.status(STATUS_BAD_REQUEST).json(e.message);
    }
}

const getMeetings = async (req,res) => {
    
const apiUrl = 'https://graph.microsoft.com/v1.0/users/8956e9e1-a177-4d76-acc6-b6814a229a9a/events/';
const bearerToken = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IndodjJKMUVTUENucl9IaHBXZURzS1JjRW5iMGRIS3kyd2FvUHFCelBLdlEiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81ODdjMDJjZS1iMjk0LTQ0YmItOGZkNi0wZjU2OTU1MDhkMjgvIiwiaWF0IjoxNjc5MTY3MDE5LCJuYmYiOjE2NzkxNjcwMTksImV4cCI6MTY3OTE3MDkxOSwiYWlvIjoiRTJaZ1lNZ3QrbWUrUTFlVHJYbnF0NzBxSDU0OUJBQT0iLCJhcHBfZGlzcGxheW5hbWUiOiJJREVBQk9YMjAyMy1IQUNLU1RSRUVUQk9ZUyIsImFwcGlkIjoiNTJlNDVmNWQtOGE5OS00MTAxLTk2NjEtNmFjZGNmZDllMjdhIiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNTg3YzAyY2UtYjI5NC00NGJiLThmZDYtMGY1Njk1NTA4ZDI4LyIsImlkdHlwIjoiYXBwIiwib2lkIjoiNjVjNGVmMDUtZTAzYy00ZmI3LWIyNDMtMmZhZjM5NTJkOWYyIiwicmgiOiIwLkFYQUF6Z0o4V0pTeXUwU1AxZzlXbFZDTktBTUFBQUFBQUFBQXdBQUFBQUFBQUFCd0FBQS4iLCJyb2xlcyI6WyJDYWxlbmRhcnMuUmVhZCIsIkdyb3VwLlJlYWQuQWxsIiwiVXNlci5SZWFkLkFsbCIsIkNhbGVuZGFycy5SZWFkQmFzaWMuQWxsIl0sInN1YiI6IjY1YzRlZjA1LWUwM2MtNGZiNy1iMjQzLTJmYWYzOTUyZDlmMiIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJBUyIsInRpZCI6IjU4N2MwMmNlLWIyOTQtNDRiYi04ZmQ2LTBmNTY5NTUwOGQyOCIsInV0aSI6InFJUHlySmR6X0VLcFJWOW0xb1E0QUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjA5OTdhMWQwLTBkMWQtNGFjYi1iNDA4LWQ1Y2E3MzEyMWU5MCJdLCJ4bXNfdGNkdCI6MTYyNDEwNDg3NX0.LxnaWG8PkS4OVSTcNFl3JAnozo7WPyi7IRiUZTKEoA1F45R1KG4fvOwS8OKWgGt7fPZgW5gK1O2sEG5nXe15sHlt0YKqFw5kTPAgnnKby7B5kmFbJHgcckUh42-pVnU0ifcbmUpiMP4tXRBZak7jIalVKSPx-Ekt-Y8Aiz9uOSCc57tfo69obFej44pfmgVw6ME8EVtQq0fW9nsBu0e_ICtfPKWQ8ZdLSo_qrlpyov-sDqZBKCNyAwGo6lgzx9Fqy_NLMxmIFh7dtlmZnFVEbZH1yKmVoUyUYISMvqohBda0lc2nhVbnyz9DF7AhkdHXDql1nwTiEatnW5pMckKTAA';

const config = {
  headers: { Authorization: `Bearer ${bearerToken}` },
};

axios.get(apiUrl, config)
  .then(response => {
    res.json(response.data);
  })
  .catch(error => {
    res.send(error)
  });
}

const timeEntryByUserID = async(req , res) => {
    const {user_id} = req.params;

    try{
        const timeEnteriesResponse = await axios.get(BASE_URL + 'time_entries.json?user_id=' + user_id +'key=' + API_KEY)
        const timeEntries = timeEnteriesResponse.data;
        res.send(timeEntries)
    } catch(e){
        res.status(STATUS_BAD_REQUEST).json(e.message);
    }
}

const test = async (req,res) =>{

}

module.exports = {
    plannedVsCompleteTask,
    allProjects,
    allMembers,
    allIssuesOfProject,
    singleProject,
    totalHoursByProject,
    test,
    getMeetings,
    timeEntryByUserID
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