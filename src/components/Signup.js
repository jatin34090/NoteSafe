import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



export const Signup = (props) => {
  const history = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "", cpassword: "", name: "" })

  const [state, setState] = useState({input: {},
    errors: {}})


  const validate = () => {
    let input = state.input;
    let errors = {};
    let isValid = true;   
    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }
    if (!input["confirm_password"]) {
      isValid = false;
      errors["confirm_password"] = "Please enter your confirm password.";
    }
    if (typeof input["password"] !== "undefined") {
      if (input["password"].length < 6) {
        isValid = false;
        errors["password"] = "Please add at least 6 charachter.";
      }
    }
    if (
      typeof input["password"] !== "undefined" &&
      typeof input["confirm_password"] !== "undefined"
    ) {
      if (input["password"] !== input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Passwords don't match.";
      }
    }
    setState({
      errors: errors
    });
    return isValid;
  }



  const handleSubmit = async (e) => {
    e.preventDefault();


    if (validate) {
      console.log(state);
      let input = {};
      
      input["password"] = "";
      input["confirm_password"] = "";
      setState({ input: input });
      // alert("Form is submitted");
    }

    const { name, email, password } = credentials;
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();

    console.log(json);

    

    // Save the auth token and redirect
    if(json.success){
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      history("/");
      props.showAlert("Account Created Successfuly ", "success")
    }
      else{
        props.showAlert("Invalid Crediantials", "danger")
      }
  }

  const onChange = (e) => {
    let input = state.input;
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setState({
      input
    });
  };

  return (
    <div className='mt-2'>
      <h2>Create an account to use NoteSafe </h2>
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>    </div>
  )
}