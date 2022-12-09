import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './register.scss';

const Register = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        password: ""
    })

   

    const [data,setData] = useState([]);
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

        const { name, email,  password } = inpval;

        if (name === "") {
            toast.error(' name field is requred!',{
                position: "top-center",
            });
        } else if (email === "") {
             toast.error('email field is requred',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             toast.error('plz enter valid email addres',{
                position: "top-center",
            });
        // } else if (password === "") {
        //      toast.error('password field is requred',{
        //         position: "top-center",
        //     });
        // } else if (password.length < 5) {
        //      toast.error('password length greater five',{
        //         position: "top-center",
        //     });
        } else {
            console.log("data added succesfully");
            history("/login")
            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

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
                    <h3>Sign Up</h3>
                    <label>First name</label>
                    <input className='input__register' type="text" name='name' onChange={getdata} placeholder="Enter Your Name"/>

                    <label for="username">Username</label>
                    <input className='input__register' type="email" name='email' onChange={getdata} placeholder="Enter email"  id="username"/>

                    <label for="password">Password</label>
                    <input className='input__register' type="password" placeholder="Password" id="password" onChange={getdata}/>

                    <button className='button__register' onClick={addData} type="submit">Submit</button>
                    <p className='link'>Already Have an Account <span className='link__span'><NavLink className="link__link" to="/login">SignIn</NavLink></span> </p>
                </form>
                <ToastContainer />
            </div>
        </>
    )
}

export default Register
