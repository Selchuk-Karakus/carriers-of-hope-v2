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
        return false;
      }
      return res.json();
  }).then((data) => {
    //store jwt token in session storage and return true as login response
    setAccessToken(data.replace(/['"]+/g, ""));
    return true;
  }).catch(error => {
      //return false because it failed to login successfully
      return false;
  });
};

function setAccessToken(userToken) {
   //stores jwt token in session storage
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

export function getAccessToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}