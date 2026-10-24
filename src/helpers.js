export const checkUser = () => {
  const result = localStorage.getItem("user");
  const token = JSON.parse(result);
  if (token) {
    return true;
  } else {
    return false;
  }
};

export const checkLocalProducts = () => {
  const result = localStorage.getItem("products");
  const products = JSON.parse(result);
  if (products) {
    return products;
  } else {
    return false;
  }
};
