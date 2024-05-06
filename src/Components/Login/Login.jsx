import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    // const [userName, setUserName] = useState('')
    // const [password, setPassword] = useState('')
    const [inputField, setInputField] = useState({ "userName": "", "pwd": "" })
    let navigate = useNavigate();
    const onClickLogin = () => {
        if (inputField.userName == 'admin' && inputField.pwd == 'admin123') {
            sessionStorage.setItem("UserId", 1);
            sessionStorage.setItem("UserName", "Shibila");
            navigate("/Dashboard")
            //alert("valid" + inputField.pwd + " " + inputField.userName)
        } else {
            alert("not valid" + inputField.pwd + " " + inputField.userName)
        }

    }
    const inputHandler = (event) => {
        debugger;
        setInputField({ ...inputField, [event.target.name]: event.target.value })
    }

    return (
        // <section class="container-fluid">
        //   <section class="row justify-content-center">
        //     <section class="col-12 col-sm-6 col-md-4">
        //       <form class="form-container">
        //       <div class="form-group">
        //         <h4 class="text-center font-weight-bold"> Login </h4>
        //         <label for="Inputuser1">Username</label>
        //          <input type="email" class="form-control" id="Inputuser1" aria-describeby="usernameHelp" placeholder="Enter username"/>
        //       </div>
        //       <div class="form-group">
        //         <label for="InputPassword1">Password</label>
        //         <input type="password" class="form-control" id="InputPassword1" placeholder="Password"/>
        //       </div>
        //       <button type="Sign in" class="btn btn-primary btn-block">Sign in</button>
        //       <div class="form-footer">
        //         <p> Don't have an account? <a href="#">Sign Up</a></p>
        //       </div>
        //       </form>
        //     </section>
        //   </section>
        // </section>
      
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-8 col-xxl-6">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">UserName</label>
                            <input name="userName" type="text" className="form-control" value={inputField.userName} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-612 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input name="pwd" type="password" className="form-control" value={inputField.pwd} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={onClickLogin} className="btn btn-success">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login