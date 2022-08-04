import { getAccessToken } from "./authService";

export async function insertOrder(orderObj) {
  return await fetch(`/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": getAccessToken(),
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

export function getOrders() {
  return fetch(`/orders`, {
    headers: {
      "x-access-token": getAccessToken(),
    },
  })
    .then((res) => {
      if (!res.ok) {
        console.log("HTTP request unsuccessful");
      }
      return res.json();
    })
    .then((res) => {
      return res;
    })
    .catch((error) => console.log(error));
}

export function getOrderById(orderId) {
  fetch(`/orders/${orderId}`, {
    headers: {
      "x-access-token": getAccessToken(),
    },
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