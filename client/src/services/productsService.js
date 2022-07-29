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
