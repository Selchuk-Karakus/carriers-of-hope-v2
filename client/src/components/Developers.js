import React from "react";

const data=[
{
   name: 'Hamra',
   image: './images/Hamra.jpg',
   linkedin: 'https://www.linkedin.com/in/hamrakhan/'
},
{
   name: 'Mahri',
   image: './images/Mahri.jpg',
   linkedin: "https://www.linkedin.com/in/mahri-atdayeva-97439621a/"
},
{
   name: 'Selchuk',
   image: './images/Selchuk.jpg',
   linkedin: 'https://www.linkedin.com/in/selchuk-karakus/'
},
]
function Developers() {
  return (
   <div className="developers-section">
      <h2>Developed By</h2>
      <div className="cards">
         {data.map((dev,index)=>{
            return(
            <div className="card">
               <div className="image-container">
                  <img src={dev.image} alt="developers image"/>
               </div>
               <div className="text-content">
                  <h4>{dev.name}</h4>
                  <p>Junior Full Stack developer</p>
                  <a  href={dev.linkedin}>Find out More</a>
               </div> 
            </div>
            )
         })}   
      </div>
   </div>
  );
}

export default Developers;
