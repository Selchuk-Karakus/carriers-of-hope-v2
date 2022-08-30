// Send a default GET request to /products/:id to GET a member
export const getProductById = async (productId) => {
  return await fetch(`/products/${productId}`)
    .then(checkStatus)
    .then((res) => {
      return res.json();
    })
    .catch((error) =>
      console.log(`${error}: Looks like there was a problem fetching data`)
    );
};

// Helper function taking care of fetch response logic
const checkStatus = (res) => {
  if (res.ok) {
    return Promise.resolve(res);
  } else {
    return Promise.reject(new Error(res.statusTex));
  }
};


//make post request to add a product to the products database

export const addProduct = async(formProduct) => {
  const url = "/products";
    const postDetails = {
      method: "POST",
      body: JSON.stringify(formProduct),
      headers: { "Content-Type": "application/json" },
    };
    try {
      const response = await fetch(url, postDetails);
      if (response.ok) {
        let jsonResponse = await response.json();
        console.log(jsonResponse);
      } else {
        throw new Error("Request failed!");
      }
    } catch (error) {
      console.log(error);
    }
}

//make put request to update a product bi id

export const updateProduct = async(product,id) => {
  const url = `/products/${id}`;
    const postDetails = {
      method: "PUT",
      body: JSON.stringify(product),
      headers: { "Content-Type": "application/json" },
    };
    try {
      const response = await fetch(url, postDetails);
      if (response.ok) {
        let jsonResponse = await response.json();
        console.log(jsonResponse);
      } else {
        throw new Error("Request failed!");
      }
    } catch (error) {
      console.log(error);
    }
}