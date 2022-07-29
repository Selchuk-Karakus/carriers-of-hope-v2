export const login = (loginObj) => {
  return fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginObj),
  })
    .then(async (res) => {
      if (!res.ok) {
        //return false because it failed to login successfully
        return {
          signedIn: false,
        };
      }
      return res.json();
  }).then((data) => {
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


export const logout = () => {
  setAccessToken("");
};

function setAccessToken(userToken) {
  //stores jwt token in session storage
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

export function getAccessToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken;
}

// Post user registration data to /register
export const signUp = (userObject) => {
  return (
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObject),
    })
      .then((res) => {
        if (res.ok) {
          return Promise.resolve(res);
        } else {
          return Promise.reject(new Error(res.statusText));
        }
      })
      //Only use if the server is sending back a JSON body in the response
      // .then((res) => res.json())
      // .then((data) => console.log(data))
  );
};
//   return tokenString.replace(/['"]+/g, "");
// }
