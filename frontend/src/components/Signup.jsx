import React, {useState} from 'react'
import {Link} from 'react-router-dom'
export const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleCheckbox = (gender) =>{
    setUser({...user, gender})
  }
  
  const onSubmitHandler= (e) => {
    e.preventDefault();
    console.log(user)
    setUser({
      fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
    })
  }
  return (
    <div className="min-w-96 mx-auto">
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
      <h1 className='text-3xl font-bold text-center text-grey-300'>Signup</h1>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label className='label p-2'>
            <span className='text-base label-text'>Full Name</span>
          </label>
          <input
          value={user.fullName}
          onChange={(e) => setUser({...user, fullName:e.target.value})}
          className="w-full input input-bordered h-10" 
          type="text" 
          placeholder="full name"/>
        </div>

        <div>
          <label className='label p-2'>
            <span className='text-base label-text'>Username</span>
          </label>
          <input
          value={user.username}
          onChange={(e) => setUser({...user, username:e.target.value})}
          className="w-full input input-bordered h-10" 
          type="text" 
          placeholder="username"/>
        </div>

        <div>
          <label className='label p-2'>
            <span className='text-base label-text'>Password</span>
          </label>
          <input
          value={user.password}
          onChange={(e) => setUser({...user, password:e.target.value})}
          className="w-full input input-bordered h-10" 
          type="password" 
          placeholder="password"/>
        </div>

        <div>
          <label className='label p-2'>
            <span className='text-base label-text'>Confirm Password</span>
          </label>
          <input
          value={user.confirmPassword}
          onChange={(e) => setUser({...user, confirmPassword:e.target.value})}
          className="w-full input input-bordered h-10" 
          type="password" 
          placeholder="Confirm Password"/>
        </div>

        <div className='flex items-center my-4'>
         <div className='flex items-center'>
          <p>Male:</p>
          <input 
          type="checkbox" 
          checked={user.gender === "male"}
          onChange={() => handleCheckbox("male")}
          defaultChecked 
          className="checkbox mx-2"/>
         </div>
        
         <div className='flex items-center'>
          <p>Female:</p>
          <input 
          type="checkbox" 
          checked={user.gender === "female"}
          onChange={() => handleCheckbox("female")}
          defaultChecked 
          className="checkbox mx-2"/>
         </div>

        </div>
        
        <p>Already have an account? <Link to='/login'>
         login
        </Link>
        </p>
        
        
        

        <div>
          <button type='submit'className="btn btn-block btn-sm mt-2 border border-slate-700">Signup</button>
        </div>
      </form>
      </div>
    </div>
  )
}

