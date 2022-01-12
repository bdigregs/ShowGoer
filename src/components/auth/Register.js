import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import "./Register.css"

export const Register = (props) => {
    const firstName = useRef()
    const email = useRef()
    const verifyPassword = useRef()
    const conflictDialog = useRef()
    const navigate = useNavigate()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()


        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            name: `${firstName.current.value}`
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("showgoer_user", createdUser.id)
                                props.setLoggedin(true)
                                navigate("/")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })

    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <form className="register-form--login" onSubmit={handleRegister}>
                <h1 className="please-register">Please register for ShowGoer</h1>
                <fieldset>
                    <label htmlFor="firstName"> Name </label>
                    <input className="name-input" ref={firstName} type="text" name="firstName"  placeholder="Name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input className="email-input" ref={email} type="email" name="email"  placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <button className="sign-in" type="submit"> Sign in </button>
                </fieldset>
            </form>
        </main>
    )
}
