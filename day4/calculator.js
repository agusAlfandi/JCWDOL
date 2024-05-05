const Cal = (params1, params2, firtur) => {
  if (firtur === "*") {
    return params1 * params2;
  } else if (firtur === "/") {
    return params1 / params2;
  } else if (firtur === "+") {
    return params1 + params2;
  } else if (firtur === "-") {
    return params1 - params2;
  } else {
    return "error";
  }
};

console.log(Cal(1, 2, "+"));
console.log(Cal(1, 2, "-"));
console.log(Cal(1, 2, "/"));
