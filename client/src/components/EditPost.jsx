import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditPost = () => {
    const [title, setTitle] = useState("")
    const [company, setCompany] = useState("")
    const [salary, setSalary] = useState("")
    const [hours, setHours] = useState("")
    const [errors, setErrors] = useState("")
    const { id } = useParams()
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

    useEffect(() => {
        axios.get("http://localhost:8000/api/oneJob/" + id)
            .then((res) => {
                console.log(res)
                setTitle(res.data.title)
                setCompany(res.data.company)
                setSalary(res.data.salary)
                setHours(res.data.hours)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (formValidator()){
            axios.put("http://localhost:8000/api/update/" + id, { title, company, salary, hours })
                .then(res => {
                    console.log(res)
                })
                .catch(err => console.log(err))
                navigate("/")
        } else{
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
        <form onSubmit={onSubmitHandler} className="col-md-6 mx-auto">
            {errors.title ? <p className="text-danger">{errors.title}</p> : ""}
            {errors.company ? <p className="text-danger">{errors.company}</p> : ""}
            {errors.salary ? <p className="text-danger">{errors.salary}</p> : ""}
            {errors.hours ? <p className="text-danger">{errors.hours}</p> : ""}
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" value={title} className="form-control" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor="company">Company</label>
                <input type="text" value={company} className="form-control" onChange={(e) => setCompany(e.target.value)} />
            </div>
            <div>
                <label htmlFor="salary">Salary</label>
                <input type="number" value={salary} className="form-control" onChange={(e) => setSalary(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-check-label">Full Time</label>
                <input className="form-check-input" type="radio" value="Full-Time" checked={hours === "Full-Time"} onChange={handleHourChange} />
                <label className="form-check-label">Part Time</label>
                <input className="form-check-input" type="radio" value="Part-Time" checked={hours === "Part-Time"} onChange={handleHourChange} />
            </div>
            <button type="submit" className="btn btn-primary m-3">Submit</button>
            <Link to={'/'}><button>Cancel</button></Link>
        </form>
    )
}

export default EditPost