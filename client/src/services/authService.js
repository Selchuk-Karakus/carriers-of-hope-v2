export const login = (loginObj) => {
  return fetch("http://localhost:8000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginObj),
  }).then(async (res) => {
      if(!res.ok) {
        //return false because it failed to login successfully
        return {
          signedIn: false,
        };
      }
      return res.json();
  }).then((data) => {
    console.log(data)
    //store jwt token in session storage and return true as login response
    setAccessToken(data.token.replace(/['"]+/g, ""));
    return {
      signedIn: true,
      isAdmin: data.isAdmin
    }
    }).catch(error => {
      //return false because it failed to login successfully
      return {
        signedIn: false
      };
  });
};

function setAccessToken(userToken) {
   //stores jwt token in session storage
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

export function getAccessToken() {
  const tokenString = sessionStorage.getItem("token");
  return tokenString.replace(/['"]+/g, "");
}