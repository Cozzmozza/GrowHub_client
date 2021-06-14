import React, {useState} from 'react';
import Job from './Job.js';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot } from '@fortawesome/free-solid-svg-icons'

const JobList = ({jobs, currentUser, deleteJob}) =>{

const copiedArray = [];

const copyJobs = jobs.forEach((job) => {
        copiedArray.push(job);
})


// Sorts jobs by deadline date, most urgent at top
const jobsByDeadline = copiedArray.sort((a, b) => {
    a = a.deadline.split('/').reverse().join('');
    b = b.deadline.split('/').reverse().join('');
    return a < b ? -1 : a > b ? 1 : 0;
});

const carrotsArray = copiedArray.forEach((job) => {
    job.carrots = [];
    for(let i=1; i<=job.difficulty; i++){
        job.carrots.push(<FontAwesomeIcon icon={faCarrot} className="carrot"/>)
    }    
});

const jobsRenderedByDeadline = copiedArray.map((job, index) => {
    return(
        <li key={index}><Job job={job} currentUser={currentUser} deleteJob={deleteJob}/></li>
    )
});

console.log(jobs)
console.log(copiedArray)


return (
    <>    
        <ul>
            {jobsRenderedByDeadline}
        </ul>
    </>
);
}


export default JobList;