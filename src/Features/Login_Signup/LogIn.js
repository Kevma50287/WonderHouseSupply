import React, { useState, useEffect } from 'react';
import { userURL } from '../../App';

export default function LogIn({ setUserData, setLogedIn }) {
    //state for user data 

    //state of data from the users data base

    const [userDataBase, setUserDataBase] = useState("None");

    useEffect(() => {
        fetch(userURL)
            .then((response) => response.json())
            .then(data => { setUserDataBase(data) })
    }, []);

    //states for userName and password
    const [userName, setNewUser] = useState("");
    const [password, setPassword] = useState("");

    //function to update values of userName and password
    const handleChange = function (e) {
        let { name, value } = e.target
        console.log(userName)
        console.log(password)
        if (name === "password") { setPassword((password) => password = value) }
        else { setNewUser((userName) => userName = value) }
    }

    // log in button
    function handleSubmit(e) {
        e.preventDefault();

        // id of userName and id of password
        let idUserName = 'None';
        let idPassword = [];


        //  1) Get the info from data base  it is userDataBase
        //get the id of user name
        userDataBase.forEach((oneObj) => {
            if (oneObj.username === userName) {
                idUserName = oneObj.id;
                console.log(idUserName)
            } else {
                // console.log('not match')
            }
        })

        //get the id of password
        userDataBase.forEach((oneObj) => {
            if (oneObj.password === password) {
                idPassword.push(oneObj.id);
                console.log(idPassword)
            } else {
                // console.log('not match')
            }
        })
        // idUserName === idPassword

        // match id of userName and id of password
        if (idPassword.includes(idUserName) && idUserName !== 'None' && idPassword !== 'None') {
            alert('you are logged in')
            fetch(`http://localhost:3002/users/${idUserName}`)
                .then((response) => response.json())
                .then(data => {
                    setUserData(data)
                    setLogedIn("true")
                    setNewUser("")
                    setPassword("")
                    idPassword = []
                })
        } else { alert('Your username or password is incorrect. Please try again.') }
    }

    return (
        <div className="full-screen-container">
            <div className="login-container">
                <h1 className="login-title">Welcome</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="input-group success">
                        <label className="username">Username</label>
                        <input type="text" name="username" value={userName} onChange={handleChange} />
                        <span className="msg"> Type Valid username</span>
                    </div>

                    <div className="input-group success">
                        <label className="password">Password</label>
                        <input type="password" name="password" id="password" value={password} onChange={handleChange} />
                        {/* <input id="password"  type="password" name="password" value={password} onChange={handleChange} /> */}
                        {/* <span className="msg">Incorrect password</span> */}
                    </div>

                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>


    )
}





    // 






// <div id="loginContainer" className="loginContainer main">
// <form id="loginForm" onSubmit={handleSubmit}>
//      <b><p className="title">Login</p></b>
//      <label className="infoLabel">USERNAME</label>
//      <input id="loginUsername" className="infoInput" type="text" name="username" value={userName} onChange={handleChange} />
//     <label className="infoLabel">PASSWORD</label>
//      <input id="loginPassword" className="infoInput" type="password" name="password" value={password} onChange={handleChange} />
//      <input id="submitLogin" className="formClick" type="submit" value="LOGIN" />
//      <button id="openSignUpForm" className="formClick" type="button"><Link to="/signUp">Sign Up</Link></button>
//  </form>
// </div>


// <div className="full-screen-container">
// <div className="login-container">
//     <h1 className="login-title">Welcome</h1>
//     <form className="form" onSubmit={handleSubmit}>
//         <div className="input-group success">
//             <label className="username">Username</label>
//             <input type="text" name="username"  value={userName} onChange={handleChange}/>
//             <span className="msg">Valid username</span>
//         </div>

//         <div className="input-group error">
//             <label className="password">Password</label>
//             <input type="password" name="password" id="password" value={password} onChange={handleChange}/>
//             {/* <input id="password"  type="password" name="password" value={password} onChange={handleChange} /> */}
//             <span className="msg">Incorrect password</span>
//         </div>

//         <button type="submit" className="login-button">Login</button>
//     </form>
// </div>
// </div>