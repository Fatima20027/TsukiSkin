function decreaseQuantity() {
  let quantityInput = document.getElementById('quantity');
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > parseInt(quantityInput.min)) {
      quantityInput.value = currentValue - 1;
  }
}

function increaseQuantity() {
  let quantityInput = document.getElementById('quantity');
  let currentValue = parseInt(quantityInput.value);
  if (currentValue < parseInt(quantityInput.max)) {
      quantityInput.value = currentValue + 1;
  }
}
