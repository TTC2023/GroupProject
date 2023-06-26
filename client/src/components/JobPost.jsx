import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


const JobPost = (props) => {
    const { jobs, setJobs } = props
    const [title, setTitle] = useState("")
    const [company, setCompany] = useState("")
    const [salary, setSalary] = useState("")
    const [hours, setHours] = useState("")
    const [errors, setErrors] = useState("")
    const navigate = useNavigate()

    const formValidator = () => {
        if (title.length < 2) {
            console.log("Validation failed: Job title must be at least 2 characters");
            return false
        }
        if (company.length < 2) {
            console.log("Validation failed: Company name must be at least 2 characters");
            return false
        }
        if (salary < 10000) {
            console.log("Validation failed: Salary must be greater than $10,000");
            return false
        }
        if (hours.length < 1) {
            console.log("Validation failed: Must choose Part-time or Full-time");
            return false
        }
        return true
    }



    const createJob = (e) => {
        e.preventDefault();
        if (formValidator()) {
            axios.post('http://localhost:8000/api/addJob', {
                title,
                company,
                salary,
                hours
            })
                .then(res => {
                    console.log("Success:", res.data);
                    setJobs([...jobs, res.data]);
                })
                .catch((err) => {
                    console.log("Error:", err);
                    if (err.response) {
                        console.log("Server responded with an error:", err.response.data);
                        setErrors(err.response.data.err.errors);
                    }
                });
            navigate('/');
        } else {
            setErrors({
                title: "Job title must be at least 2 characters",
                company: "Company name must be at least 2 characters",
                salary: "Salary must be greater than $10,000",
                hours: "Must choose Part-time or Full-time"
            })
        }
    }

    const handleHourChange = (e) => {
        setHours(e.target.value)
    }


    return (
        <>
            <form onSubmit={createJob}>
                {errors.title ? <p className="text-danger">{errors.title}</p> : ""}
                {errors.company ? <p className="text-danger">{errors.company}</p> : ""}
                {errors.salary ? <p className="text-danger">{errors.salary}</p> : ""}
                {errors.hours ? <p className="text-danger">{errors.hours}</p> : ""}
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Job Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="company" className="form-label">Company</label>
                    <input type="text" className="form-control" value={company} onChange={(e) => setCompany(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="salary" className="form-label">Salary</label>
                    <input type="number" className="form-control" value={salary} onChange={(e) => setSalary(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-check-label">Full Time</label>
                    <input className="form-check-input" type="radio" value="Full-Time" checked={hours === "Full-Time"} onChange={handleHourChange} />
                    <label className="form-check-label">Part Time</label>
                    <input className="form-check-input" type="radio" value="Part-Time" checked={hours === "Part-Time"} onChange={handleHourChange} />
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </>
    )
}
export default JobPost;