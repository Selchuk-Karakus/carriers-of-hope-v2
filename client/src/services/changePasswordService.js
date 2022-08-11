
// Post to change password 
export const resetPassword = async(userEmail) => {
   return (
      fetch("/change-password", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({email:userEmail}),
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