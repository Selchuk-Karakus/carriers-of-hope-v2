import React,{useState, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';
import {sendEmail} from '../services/changePasswordService';
// import {getMembers} from '../services/membersService';
// import { MembersContext } from "../Contexts/MembersContext";



function ForgottenPasswordPage() {
   const navigate = useNavigate();
   const [email, setEmail] = useState({});
   const [resultText, setResultText] = useState('type your email');
   // const { members, setMembers } = useContext(MembersContext);

   // getMembers().then((members) => {
   //    setMembers(members);
   //  });
   const handleInputValue =(e)=>{
      setEmail(e.target.value);
   }
  
   const handleSubmit = (e) =>{
      e.preventDefault();
      // let isMember = members.find(user=>user.email===email);
      // if(!isMember){
      //    console.log('You are not registered!')
      // }
      sendEmail(email).then(res=>{
         if(res){
            console.log(res)
         }
      })
      setResultText('Check your email to reset your password!');


     
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
         <form>
         <label>UserName:</label>
         <input onChange={handleInputValue} name='email' type="email" placeholder='username@mail.com'/>
         <button className='verify-btn' onClick={handleSubmit}>Get New Password</button>
         </form>
      </div>
   )
}


export default ForgottenPasswordPage;