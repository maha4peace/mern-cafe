
import { useState } from "react";
import { signUp } from "../utilities/users-api";}

function SignUpForm({setUser}) {
       const [formData, setFormData] = useState({
                name: '',
                email: '',
                password: '',
                confirm: '',
        }) ;
    

const [error, setError] = useState('')  


function handleFormChange(event) {
   const {name, value} = event.target
   setFormData({...formData, [name]: value })
}

function handleFormSubmit(event) {
    event.preventDefault();
    try {
        const userData = {...formData} ;
        delete userData.confirm ; 
        const user = await signUp(userData)
        setUser(user)
    } catch(error) {
        setError("Sign Up Failed - Try Again")
    }
}

const disable = formData.password !== formData.confirm;

 return  (
    
    <div>
        <div className="form-container">
            <form autoComplete="off" onSubmit={handleFormSubmit}>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleFormChange} required />
                <label>Email</label>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleFormChange} required />
                <label>Password</label>
                <input 
                    type="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleFormChange} required />
                <label>Confirm</label>
                <input 
                    type="password" 
                    name="confirm" 
                    value={formData.confirm} 
                    onChange={handleFormChange} required />
                <button type="submit" disabled={disable}>SIGN UP</button>
            </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
    </div>
    )
}

export default SignUpForm ; 


/* import { Component } from "react";
//import {signUp} from "./utilities/users-service"


 export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    }

    handleChange = (evt) => {
        console.log(evt.target)
        this.setState({
            [evt.target.name] : evt.target.value, 
            error: ''
        }) 
    }

    handleSubmit = async (evt) => {
        evt.preventDefault() 
        // Prevent form from being submitted to the server
        try {
            const formData = {...this.state}
            delete formData.error
            delete formData.confirm
            console.log(this.state)
            this.props.setUser(formData) 
        } catch {
            this.setState({error: "Sign up failed!"})
            //alert(JSON.stringify(this.state))
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        return  (
            <div>
                <div className="form-container">
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={this.state.name} 
                            onChange={this.handleChange} required />
                        <label>Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={this.state.email} 
                            onChange={this.handleChange} required />
                        <label>Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            value={this.state.password} 
                            onChange={this.handleChange} required />
                        <label>Confirm</label>
                        <input 
                            type="password" 
                            name="confirm" 
                            value={this.state.confirm} 
                            onChange={this.handleChange} required />
                        <button type="submit" disabled={disable}>SIGN UP</button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        )
    }
} */