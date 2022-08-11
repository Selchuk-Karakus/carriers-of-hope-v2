import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';
import {resetPassword} from '../services/changePasswordService';


function ForgottenPasswordPage() {

   const navigate = useNavigate();
   const [email, setEmail] = useState({});


   const handleInputValue =(e)=>{
      setEmail(e.target.value);
   }
   console.log(email )
   const sendEmail = (e) =>{
      e.preventDefault();
      resetPassword(email).then((result)=>{
         console.log(result)
      })

     
   }
   

   return (
      <div className='forgottenPassword'>
        <button className="back-btn" onClick={() => navigate(-1)}>
          <span className="icon">
            <IoIosArrowBack />
          </span>
          Back
        </button>
         <form>
         <label>UserName:</label>
         <input onChange={handleInputValue} name='email' type="email" placeholder='username@mail.com'/>
         <button className='verify-btn' onClick={sendEmail}>Get New Password</button>
         </form>
      </div>
   )
}


export default ForgottenPasswordPage;