import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//Services
import userServices from "../services/userServices"

export const SignUp = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    })

    const handleChange = e => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await userServices.signup(formData);
            
            if (data.success){
                console.log(data);
                navigate("/login")
            } else{
                window.alert(data.message)
            }
        } catch(error){
            window.alert("An unexpected error occurred. Please try again later.")
        }
    }

    return(
        <div className="card w-75 mx-auto">
            <form className="p-3" onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="InputName2" className="form-label fs-5">Name</label>
                    <input type="text" 
                    value={formData.first_name}
                    name="first_name"
                    onChange={handleChange}
                    className="form-control" 
                    id="InputName2"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="InputLastName2" className="form-label fs-5">Last name</label>
                    <input type="text" 
                    value={formData.last_name}
                    name="last_name"
                    onChange={handleChange}
                    className="form-control" 
                    id="InputLastName2"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="InputEmail2" className="form-label fs-5">Email</label>
                    <input type="email" 
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                    className="form-control" 
                    id="InputEmail2" 
                    aria-describedby="emailHelp"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="InputPassword2" className="form-label fs-5">Password</label>
                    <input type="password"
                    value={formData.password} 
                    name="password"
                    onChange={handleChange}
                    className="form-control" 
                    id="InputPassword2"/>
                </div>

                <button type="submit" className="btn btn-danger mt-2">Submit</button>

                <p className="mb-0 mt-3 text-end">
                    Do you have an account?
                    <Link to="/login" className="ms-1 text-success">
                        Log in now!
                    </Link>
                </p>

            </form>
        </div>
        
    )
}