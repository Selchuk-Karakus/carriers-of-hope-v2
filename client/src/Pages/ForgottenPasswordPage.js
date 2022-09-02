import React,{useState, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';
import {sendEmail} from '../services/changePasswordService';

function ForgottenPasswordPage() {
   const navigate = useNavigate();
   const [email, setEmail] = useState({});
   const [resultText, setResultText] = useState('Enter your email.');
   const [errorMessage, setErrorMessage] = useState('');
   

   const handleInputValue =(e)=>{
      setResultText('Enter your email.')
      setEmail(e.target.value);
      setErrorMessage('');

   }
  
   const handleSubmit = (e) =>{
      e.preventDefault();
      sendEmail(email).then((resultText)=>{
         if(resultText.mailSent){
            setResultText('Now check your email to reset your password!');
            setErrorMessage('');

         } else{
            setResultText('');
            setErrorMessage('User not found!');

         }
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
        <p>{resultText}</p>
        <p className='errorMessage'>{errorMessage}</p>
         <form>
         <label>UserName:</label>
         <input onChange={handleInputValue} name='email' type="email" placeholder='username@mail.com'/>
         <button className='verify-btn' onClick={handleSubmit}>Get New Password</button>
         </form>
      </div>
   )
}


export default ForgottenPasswordPage;