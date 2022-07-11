export function insertOrder(orderObj) {
  fetch(`http://localhost:8000/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderObj),
  })
    .then((res) => {
      if (!res.ok) {
        console.log(res);
        console.log("HTTP request unsuccessful");
      }
      return res;
    })
    .catch((error) => console.log(error));
}