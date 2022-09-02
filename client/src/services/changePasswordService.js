
export const sendEmail = async(userEmail) => {
   const url = "/reset-password/send-email";
     const postDetails = {
       method: "POST",
       body: JSON.stringify({email:userEmail}),
       headers: { "Content-Type": "application/json" },
     };
     try {
       const response = await fetch(url, postDetails);
       if (response.ok) {
         let jsonResponse = await response.json();
         return {
            mailSent:true,
            response: jsonResponse
         }
       } else {
          return {
            mailSent:false
          }
       }
     } catch (error) {
       console.log(error);
     }
 }

export const updatePassword = async(reqBody, id, token) => {
   console.log(reqBody)
   return (
      fetch(`/reset-password/update/${id}/${token}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
      })
      .then((res) => {
         if (res.ok) {
         return Promise.resolve(res);
       } else {
         return Promise.reject(new Error(res.statusText));
       }
     })
   );

};