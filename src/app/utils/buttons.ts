export const addToCart = () => {
  alert("addToCart");
};

export const addAmountProduct = (currentAmount:number) => {
console.log("---")
return currentAmount + 1;
}

export const delAmountProduct = (currentAmount:number) => {
  console.log("+++")
return currentAmount === 0 ? 0 : currentAmount -1;
}