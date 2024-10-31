import React from 'react'
import "./Signup.css"
import axios from 'axios'

function Signup() {


  function handleSignup(e){
    e.preventDefault()

    let data = new FormData(e.currentTarget)

    axios.post("https://server-jogp.onrender.com/signup/", data)
    .then((res) => {
      alert("signup successful")
      
    })
    .catch((err) =>{
      let allerrors =  err.response.data

      for(let key in allerrors){
        alert(key +": " + allerrors[key])
      }
      
    })
  }

  return (
    <div>
      <div className='container border'>
          <h1 style={{textAlign: "center"}}>Sign Up</h1>
          <h5 style={{textAlign: "center"}}>creat account</h5><br />

          <div className='signup'>
            <form onSubmit={handleSignup}>
                <div>
                  <label className='form-label'>firstname</label>
                  <input className='form-control' name='first_name' type="text" placeholder='firstname' required/>
                </div>

                <div>
                    <label className='form-label'>lastname</label>
                    <input name='last_name' type="text" placeholder='lastname' />
                </div><br />
                
                <div>
                  <label>Email</label>
                  <input name='email' type="text" placeholder='Email'/>
                </div>
                
                <div>
                  <label htmlFor="Password">Password</label>
                  <input type="password" name='password' placeholder='Password'/>
                </div><br />
                
               <div>
                <input type="file" name='image'/>
                </div> 

                <div className='btn'>
                <button className='btn btn-outline-primary' type='Submit'>Submit</button>
                <p className='text-primary'>already have an account</p>
            </div>
            </form>
           
          </div>
      </div>
    </div>
  )
}

export default Signup