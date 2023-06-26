import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
//import 'bootstrap/dist/css/bootstrap.css'

const Home = (props) =>{
    const [jobs, setJobs] = useState([])
    const navigate = useNavigate()

    useEffect (() => {
        axios.get("http://localhost:8000/api/allJobs")
            .then((res)=>{
                console.log(res)
                setJobs(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    const deleteJob = (id) => {
        axios.delete("http://localhost:8000/api/delete/" + id)
            .then((res)=>{
                console.log(res)
                setJobs(jobs.filter(job => job._id !== id))
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    return (
        <>
        <div>
        <h1>Job Board</h1>
        <Link to = "/create">Create a Job Post</Link>
        </div>
        <div>
    <table className="table table-striped">
        <thead>
            <tr>
            <th>Job Title</th>
            <th>Company</th>
            <th>Salary</th>
            <th>Full/Part-Time</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        {jobs.map((job, index) => {
                return (
                <tr key={index}>
                    <td>{job.title}</td>
                    <td>{job.company}</td>
                    <td>{job.salary}</td>
                    <td>{job.hours}</td>
                    <td><Link to={'/edit/' + job._id}><button className="btn btn-primary">Edit</button></Link><button onClick={()=>deleteJob(job._id)} className="btn btn-danger mx-2">Delete</button></td>
                </tr>
                );
            })}
        </tbody>
    </table>
        </div>
        </>
    )

}
export default Home;