import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';



function ForgottenPasswordPage() {

   const navigate = useNavigate();
   const [userName, setUserName] = useState('');

   const handleInputValue =(e)=>{
      setUserName(e.target.value);
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
         <input onChange={handleInputValue} type="email" placeholder='username@mail.com'/>
         <button className='verify-btn'>Get New Password</button>
         </form>
      </div>
   )
}


export default ForgottenPasswordPage;