import React, {useState} from "react";
import axios from 'axios';


const JobPost = (props) => {
    const [title, setTitle] = useState("")
    const [company, setCompany] = useState("")
    const [salary, setSalary] = useState("")


    const createJob = (e) => {
        e.preventDefault();

    };

    return (
    <>
        <form onSubmit={createJob}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                Job Title
                </label>
                <input type="text" className="form-control" value = {title} onChange={ (e) => setTitle(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="company" className="form-label">
                Company
                </label>
                <input type="text" className="form-control" value = {company} onChange={ (e) => setCompany(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="salary" className="form-label">
                Salary
                </label>
                <input type="number" className="form-control" value={salary} onChange={ (e) => setSalary(e.target.value)}/>
            </div>
            <div className="mb-3">
            <label className="form-check-label">
                Full Time
            </label>
            <input  className="form-check-input" type="radio"/>
            <label className="form-check-label">
                Part Time
            </label>
                <input  className="form-check-input" type="radio"/>
            </div>
            <button type="submit" className="btn btn-primary">
                Create
            </button>
        </form>
        
    </>
    )
}
export default JobPost;