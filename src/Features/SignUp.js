import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {


    const initialState = {
        username: "",
        password: "",
        userCategory: "user",
        "Cart": []
    }

    

    const [newUser, setNewUser] = useState(initialState);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


//array with all userNames 
const [userNames, setUserNames] = useState([])

useEffect(() => {
  fetch("http://localhost:3002/users")
    .then(r => r.json())
    .then(d => setUserNames(d));
}, [])



let arrayAllUserNames = userNames.map((user) => {
    return user.username

    
})

// console.log(arrayAllUserNames)

    const handleChange = function (e) {
        let { name, value } = e.target
        if (name === "password") {
            setPassword((password) => password = value)
            setNewUser({ ...newUser, [name]: value })
        }
        else { setNewUser({ ...newUser, [name]: value }) }
    }

    // console.log(newUser)
    // console.log(password)
    // console.log(confirmPassword)

    const handleChangeTwo = function (e) {
        // console.log(e.target.value)
        setConfirmPassword((confirmPassword) => confirmPassword = e.target.value)
    }

    // && arrayAllUserNames.includes(newUser.username)

    function handleSubmit(e) {
        e.preventDefault();
        if (password === confirmPassword && !arrayAllUserNames.includes(`${newUser.username}`)) {
            fetch("http://localhost:3002/users", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            })
                .then((response) => response.json())
                .then(data => console.log(data));
           
            setPassword("");
            setConfirmPassword("");
            setNewUser(initialState);
            alert('Successfully created an account! Please log in!')
        } else {
            setPassword("");
            setConfirmPassword("");
            setNewUser(initialState);
            alert('Your passwords do not match. Please try again.')
        }
        // setNewUser(initialState);
    }







    return (
        <div id="signupContainer" className='hide' >
            <form id="signupForm" onSubmit={handleSubmit}>
                <b><p className='title'>Create New Account</p></b>
                <label className="infoLabel">USERNAME</label>
                <input id="signupUsername" className="infoInput" type="text" name="username" onChange={handleChange} />
                <label className="infoLabel">PASSWORD</label>
                <input id="signupPass" className="infoInput" type="password" name="password" onChange={handleChange} />
                <label className="infoLabel">CONFIRM PASSWORD</label>
                <input id="signupConfirmPass" className="infoInput" type="password" name="confirmPassword" onChange={handleChangeTwo} />
                <input id="submitCreate" type="submit" className="formClick" value="SIGN UP" />
                <button id="goBackLoginBtn" type="button" className="formClick"><Link to="/logIn">Go Back To Login</Link></button>
            </form>
        </div>
    );
}