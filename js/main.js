function my_fun(number) {
  let arr = number.toString().split("");
  let result = 0;
  for (let value of arr) {
    result = result + Number(value);
  }
  if (result < 10) {
    return result;
  } else {
    return my_fun(result);
  }
}
console.log(my_fun(55));
