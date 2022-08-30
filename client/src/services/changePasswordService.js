
// Send email to user with link to change password
export const sendEmail = async(userEmail) => {
   return (
      fetch("/reset-password/send-email", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({email:userEmail}),
      })
      .then((res) => {
         if (res.ok) {
            console.log(res)
         return Promise.resolve(res);
       } else {
         return Promise.reject(new Error(res.statusText));
       }
     })
   );

};

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