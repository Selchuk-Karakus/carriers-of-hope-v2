import React,{useState, useEffect} from 'react';
import {Navigate, useParams} from 'react-router-dom';
import {updatePassword} from '../services/changePasswordService';
import {isValidPassword} from '../services/validationService';
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';

function ChangePasswordPage() {
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [errorMessage, setErrorMessage] = useState('');
   const [confirmClass, setConfirmClass] = useState('Confirmed-password');
   const [valid, setValid] = useState(false);
   const [redirect, setRedirect] = useState(false);
   const [inputType, setInputType]= useState('text')
   const { id, token } = useParams();

   useEffect(()=>{
      const generatePassword = () => {
         // Create a random password
         const randomPassword =
           Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
         
         // Set the generated password as state
         setPassword(randomPassword);
         setConfirmPassword(randomPassword);
         setValid(true);
       };
       generatePassword();

   },[])

   useEffect(()=>{
      const isValid= () => {
      let result = isValidPassword(password);
      if(result){
         setErrorMessage('');
         if(password!==confirmPassword||password===''){
            setConfirmClass('unConfirmed-password')
            setErrorMessage('Please enter the same password!');
            setValid(false);
            }else{  
            setConfirmClass('Confirmed-password')
            setErrorMessage('');
            setValid(true);
            }
      } else{
         setErrorMessage('Password have to be at least 5 characters or numbers long!')
      }
      
       };
       isValid();

   },[password, confirmPassword])



   const createOwnPassword=(e)=>{
      e.preventDefault();
      setInputType('password');
      setPassword('');
      setConfirmPassword('');
      setValid(false);
   }

   const handleInputValue=(e)=>{
      let newPassword = e.target.value;
      setPassword(newPassword);
   }

   const handleConfirmPassword=(e)=>{
      let newPassword=e.target.value;
      setConfirmPassword(newPassword)
   }

   const resetPassword = (e) =>{
      e.preventDefault();
      if(!valid){
         alert('password is not valid!')
      }else{
         updatePassword({password}, id, token)
         setRedirect(true);
      }

   }

   if (redirect) {
      return <Navigate to={'/login'}/>
    }
  
   return (
      <div className='change-password'>
        <h4>Enter your new password below</h4>
         <form>
            <label>New Password <span>*</span></label>
            <div className='inputWithIcon'>
               <input type={inputType}
                     onChange={handleInputValue}  
                     value={password}
                     
               />
               <span className='password-icon' onClick={()=>inputType==='password'?setInputType('text'):setInputType('password')}>{inputType==='text'?<AiFillEyeInvisible/>:<AiFillEye/>}</span>
            </div>
            <label>New Password (Confirmation) <span>*</span></label>
            <div className='inputWithIcon'>
               <input type={inputType} 
                     value={confirmPassword}
                     onChange={handleConfirmPassword}
                     className={confirmClass}
                     
               />
               <span className='password-icon' onClick={()=>inputType==='password'?setInputType('text'):setInputType('password')}>{inputType==='text'?<AiFillEyeInvisible/>:<AiFillEye/>}</span>
            </div>
             <p className='error-message'>{errorMessage}</p>
            <button onClick={createOwnPassword} >Use your own password?</button>
            <button className='reset-btn' onClick={resetPassword}>Reset Password</button>
         </form>
      </div>
   )
}


export default ChangePasswordPage;