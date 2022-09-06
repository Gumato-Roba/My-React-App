
import "./Loginform.css"
import pic from './girl.webp'
import React, {useState,useEffect} from 'react';



const Loginform = () =>{

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const handleSubmit = ()=>{
    const data = {
     email: email,
     password:password
    }
    console.log({data});
    alert(JSON.stringify(data))
  }

    return(
<form>
        <div className="header">
         <div className="cover">
            <p>Ediie Shop</p>
         <div className="content">
         <h6>Don't have an account? Signup</h6>
           <h4>Welcome Back</h4>
           <p>Your email</p>
           <input type="Your Email" placeholder="name@domain.com"
             value={email}
             onChange={(e)=>{setEmail(e.target.value)}}/>
           <p>Password</p>
           <input type="Password" placeholder="at least 8 characters"
           value={password}
           onChange={(e)=>{setPassword(e.target.value)}}/>
           <input type="checkbox" className="checkbox" ></input>  
          <p>Keep me logged in</p>  
          <p>Forgot password?</p>
           <button type="submit" onSubmit={handleSubmit}>Login</button>              
         </div>
        <img className="image" src={pic} width=''></img>
        <div className="other">
            <p>__________or_____________</p> 
        </div>
        <div className="faceb">
        <i class="fa-brands fa-facebook"></i>
        </div>
        <div className="google">
        <i class="fa-brands fa-google"></i>
        </div>
        <div className="instagram">
        <i class="fa-brands fa-instagram"></i>
        </div>

         </div>
      
     </div>
     </form>    
    )
}
export default Loginform