import React from 'react';
import Job from './Job';

const JobDetails = ({job, getCarrots}) => {

    return (
        <>
            <h1 id="job-details-heading">Job Details</h1>
            <ul>
                <li>{job.title}</li>
                <li>Due date: {job.deadline}</li>
                <li>Description:</li>
                <li>{job.body}</li>
                <li>Difficulty: {getCarrots(job)}</li>
            </ul>
        </>
    )
}

export default JobDetails;