import React from 'react'
import { useState } from 'react';

const Register = ({ loadUser, onRouteChange }) => {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerName, setRegisterName] = useState('');

    const onNameChange = (event) => {
        setRegisterName(event.target.value);
      }
    

    const onEmailChange = (event) => {
        setRegisterEmail(event.target.value);
      }
    
      const onPasswordChange = (event) => {
        setRegisterPassword(event.target.value);
      }
    
      const onSubmitRegister = () => {
        
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/register`, {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: registerEmail,
            password: registerPassword,
            name: registerName
          })
        })
          .then(response => response.json())
          .then(user => {
            if (user.id) {
              loadUser(user);
              onRouteChange('home');
            }
          })
      }
    
    return (
        <article className="br3 ba b--black-10 bg-dark-blue mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 white-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input 
                              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white" 
                              type="text" 
                              name="name" 
                              id="name"
                              onChange={onNameChange}
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input 
                              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white" 
                              type="email" 
                              name="email-address" 
                              id="email-address"
                              onChange={onEmailChange}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                              type="password" 
                              name="password" 
                              id="password"
                              onChange={onPasswordChange}
                            />
                        </div>
                    </fieldset>
                    <div className="">
                        <input 
                          onClick={onSubmitRegister}
                          className="b ph3 pv2 input-reset ba b--white white bg-transparent grow pointer f6 dib" 
                          type="submit" 
                          value="Register" 
                        />
                    </div>
                </div>
            </main>
        </article>
    )
}

export default Register