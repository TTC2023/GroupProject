import React,{ useState } from "react";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css'

const Home = (props) =>{
    // const [JobTitle, setJobTitle] = useState()
    // const [Company, setCompany] = useState()
    // const [Salary, setSalary] = useState()
    // const [Hours, setHours] = useState()

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
            <tr>
            <td>Front-End Developer</td>
            <td>FaceBook</td>
            <td>$75000</td>
            <td>Full</td>
            <td>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger">Delete</button>
            </td>
            </tr>
            <tr>
            <td>Back-End Development</td>
            <td>Amazon</td>
            <td>$100000</td>
            <td>Full</td>
            <td>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger">Delete</button>
            </td>
            </tr>
        </tbody>
    </table>
        </div>
        </>
    )

}
export default Home;