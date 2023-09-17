import { useState } from "react"

function SignUp() {

    const handleClick = (e) => {
        e.preventDefault()
        const employee = { address, name, email, instagram, job, linkedin, phone, password }
        console.log(employee)
        fetch("http://localhost:8080/employee/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(employee)

        }).then(() => {
            console.log("New Employee added")
        })
    }

    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [instagram, setInstagram] = useState('')

    return (
        <div>
            <form>
                <div className="form-group">
                    <a id="black-label">Name</a>
                    <input className="form-control" id="employeeName" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <a id="black-label">Job Title</a>
                    <input className="form-control" id="employeeName" placeholder="Job title" value={job} onChange={(e) => setJob(e.target.value)} />
                </div>
                <div className="form-group">
                    <a id="black-label">Email address</a>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <a id="black-label">Password</a>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <a id="black-label">Phone Number</a>
                    <input className="form-control" id="exampleInputPassword1" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="form-group">
                    <a id="black-label">Address</a>
                    <input className="form-control" id="exampleInputPassword1" placeholder="Password" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="form-group">
                    <a id="black-label">Linkedin</a>
                    <input className="form-control" id="exampleInputPassword1" placeholder="Linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
                </div>
                <div className="form-group">
                    <a id="black-label">Instagram</a>
                    <input className="form-control" id="exampleInputPassword1" placeholder="Istagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default SignUp