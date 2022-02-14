import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Login =  (props) => {
    const [credentials, setCredentials] = useState({email:"",password:""})
    const navigate = useNavigate()
    const handleLogin = async (e)=>{
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: credentials.email, password:credentials.password})

        });
        
        const json = await response.json()
        // console.log(json);
        if(json.success){
            localStorage.setItem('token',json.authtoken)
            props.showAlert("Logged in  successfully!","success")
            navigate("/")

        }
        else{
            alert("Invalid Credentials")
            props.showAlert("Invalid Credentials","danger")

        }
    }
    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    return (
        <div className='container my-4'>
        <h2 className='text-center'>Login into your NOTSI account</h2>
        <div className='container my-4'>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={onChange} value={credentials.email}   id="email" name='email' />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={onChange} value={credentials.password}   name='password' id="password"/>
                </div>        
                <button type="submit" className="btn btn-primary" >Login</button>
            </form>
        </div>
        </div>
    )
}

export default Login