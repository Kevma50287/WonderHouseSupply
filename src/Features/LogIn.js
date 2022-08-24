import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { userURL } from '../App';

export default function LogIn({ setUserData, setLogedIn }) {
    //state for user data 

    //state of data from the users data base

    const [userDataBase, setUserDataBase] = useState("None");

    useEffect(() => {
        fetch(userURL)
            .then((response) => response.json())
            .then(data => { setUserDataBase(data) })
    }, []);

    // id of userName and id of password
    let idUserName = 'None';
    let idPassword = 'None';

    //states for userName and password
    const [userName, setNewUser] = useState("");
    const [password, setPassword] = useState("");

    //function to update values of userName and password
    const handleChange = function (e) {
        let { name, value } = e.target
        if (name === "password") { setPassword((password) => password = value) }
        else { setNewUser((userName) => userName = value) }
    }

    // log in button
    function handleSubmit(e) {
        e.preventDefault();
        //  1) Get the info from data base  it is userDataBase
        //get the id of user name
        userDataBase.forEach((oneObj) => {
            if (oneObj.username === userName) {
                idUserName = oneObj.id;
            } else {
                // console.log('not match')
            }
        })

        //get the id of password
        userDataBase.forEach((oneObj) => {
            if (oneObj.password === password) {
                idPassword = oneObj.id;
            } else {
                // console.log('not match')
            }
        })

        // match id of userName and id of password
        if (idUserName === idPassword && idUserName !== 'None' && idPassword !== 'None') {
            alert('you are logged in')
            fetch(`http://localhost:3002/users/${idUserName}`)
                .then((response) => response.json())
                .then(data => {
                    setUserData(data)
                    setLogedIn("true")
                    setNewUser("")
                    setPassword("")
                })
        } else { alert('Your username or password is incorrect. Please try again.') }
    }

    return (
        <div id="loginContainer" className="loginContainer main">
            <form id="loginForm" onSubmit={handleSubmit}>
                <b><p className="title">Login</p></b>
                <label className="infoLabel">USERNAME</label>
                <input id="loginUsername" className="infoInput" type="text" name="username" value={userName} onChange={handleChange} />
                <label className="infoLabel">PASSWORD</label>
                <input id="loginPassword" className="infoInput" type="password" name="password" value={password} onChange={handleChange} />
                <input id="submitLogin" className="formClick" type="submit" value="LOGIN" />
                <button id="openSignUpForm" className="formClick" type="button"><Link to="/signUp">Sign Up</Link></button>
            </form>
        </div>
    )
}