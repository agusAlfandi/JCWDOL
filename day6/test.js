const productName = ["Apple", "Banana", "Melon"];
const Price = [10000, 20000, 30000];

let printProduct = "";
const resProduct = productName.forEach((item, index) => {
  printProduct += `${index + 1}. ${item} \n`;
});

const selectedProduct = Number(prompt(printProduct));

if (
  selectedProduct <= 0 ||
  selectedProduct > productName.length ||
  isNaN(selectedProduct)
) {
  alert("Product is no found");
} else {
  alert(
    `${productName[selectedProduct - 1]} = Rp.${Price[
      selectedProduct - 1
    ].toLocaleString("id-ID")}`
  );
}
