import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './register.scss';

const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres', {
                position: "top-center",
            });
        // } else if (password === "") {
        //     toast.error('password field is requred', {
        //         position: "top-center",
        //     });
        // } else if (password.length < 5) {
        //     toast.error('password length greater five', {
        //         position: "top-center",
        //     });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid detailes")
                } else {
                    console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/detailes")
                }
            }
        }

    }

    return (
        <>
            <div className="register__box">
                
                <div className="background">
                    <div className="shape"></div>
                    <div className="shape"></div>
                </div>
                <form>
                    <h3>Login Here</h3>

                    <label for="username">Username</label>
                    <input className='input__register'  type="email" name='email' onChange={getdata} placeholder="Enter email"  id="username"/>

                    <label for="password">Password</label>
                    <input className='input__register'  type="password" placeholder="Password" id="password" onChange={getdata}/>

                    <button className='button__register' onClick={addData} type="submit">Submit</button>
                    <p className='link'>Already Have an Account <span className='link__span'><NavLink className="link__link" to="/register">Sign In</NavLink></span> </p>
                </form>
                <ToastContainer />
            </div>
        </>
    )
}

export default Login