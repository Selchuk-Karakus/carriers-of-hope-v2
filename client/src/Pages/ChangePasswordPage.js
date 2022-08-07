import React,{useState, useEffect} from 'react';
import {Navigate} from 'react-router-dom';


function ChangePasswordPage() {
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [errorMessage, setErrorMessage] = useState('');
   const [confirmClass, setConfirmClass] = useState('Confirmed-password');
   const [valid, setValid] = useState(false);
   const [redirect, setRedirect] = useState(false);


   useEffect(()=>{
      const generatePassword = () => {
         // Create a random password
         const randomPassword =
           Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
         
         // Set the generated password as state
         setPassword(randomPassword);
         setConfirmPassword(randomPassword);
         // setValid(true);
       };
       generatePassword();
       console.log(password);

   },[])

   useEffect(()=>{
      const isValid= () => {
       if(password!==confirmPassword||password===''){
         setConfirmClass('unConfirmed-password')
         setErrorMessage('Please enter same password!');
         setValid(false)
       }else{
         setConfirmClass('Confirmed-password')
         setErrorMessage('');
         setValid(true)
       }
       };
       isValid();

   },[confirmPassword])



   const createOwnPassword=(e)=>{
      e.preventDefault();

      setPassword('');
      setConfirmPassword('');
      setValid(false);
      (console.log(valid))
   }

   const handleInputValue=(e)=>{
      let newPassword = e.target.value;
      setPassword(newPassword)
   }

   const handleConfirmPassword=(e)=>{
      let newPassword=e.target.value;
      setConfirmPassword(newPassword)
   }

   const resetPassword = (e) =>{
      e.preventDefault();
      if(!valid){
         alert('password in not valid!')
      }else{
         alert('added');
         setRedirect(true);
      }

   }

   if (redirect) {
      return <Navigate to={'/login'}/>
    }
  
   return (
      <div className='change-password'>
        {/* <button className="back-btn" onClick={() => navigate('/')}>
          <span className="icon">
            <IoIosArrowBack />
          </span>
          Home
        </button>
         */}
        <h4>Enter your new password below</h4>
         <form>
            <label >New Password <span>*</span></label>
            <input type="text"
                  onChange={handleInputValue}  
                  value={password}
            />
            <label>New Password (Confirmation) <span>*</span></label>
            <input type="text" 
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                  className={confirmClass}
             />
             <p>{errorMessage}</p>
            <button onClick={createOwnPassword}>Use your own password?</button>
            <button className='reset-btn' onClick={resetPassword}>Reset Password</button>
         </form>
      </div>
   )
}


export default ChangePasswordPage;