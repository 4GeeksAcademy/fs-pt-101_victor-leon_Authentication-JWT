import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

//Services
import userServices from "../services/userServices"

export const LogIn = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    // need to add here on key down to avoid being update while we write
    const handleChange = e => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await userServices.login(formData);
            
            if (data.success){
                console.log(data);
                navigate("/private")
            } else{
                window.alert(data.message)
            }
        } catch(error){
            window.alert("Something happened, please try again")
        }
    }

    return(

        <div className="card w-75 mx-auto">
            <form className="p-3" onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="InputEmail1" className="form-label fs-5">Email</label>
                    <input type="email" 
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                    className="form-control" 
                    id="InputEmail1" 
                    aria-describedby="emailHelp"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="InputPassword1" className="form-label fs-5">Password</label>
                    <input type="password"
                    value={formData.password} 
                    name="password"
                    onChange={handleChange}
                    className="form-control" 
                    id="InputPassword1"/>
                </div>

                <button type="submit" className="btn btn-primary mt-2">Log In</button>

                <p className="mb-0 mt-3 text-end">
                    Are you not registered yet?
                    <Link to="/signup" className="ms-1 text-success">
                        Sing up now!
                    </Link>
                </p>

            </form>          
        </div>
        
    )
}