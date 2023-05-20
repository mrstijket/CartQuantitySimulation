let cartQuantity = 0;
function cartUpdate(number) {
	if (number === -3) {
		cartQuantity -= 3;
	} else if (number === -2) {
		cartQuantity -= 2;
	} else if (number === -1) {
		cartQuantity--;
	} else if (number === 1) {
		cartQuantity++;
	} else if (number === 2) {
		cartQuantity += 2;
	} else if (number === 3) {
		cartQuantity += 3;
	} else {
		cartQuantity = 0;
	}

	showQuantity();
}
function showQuantity() {
	if (cartQuantity > 10) {
		alert("The cart is full! (10)");
		cartQuantity = 10;
	} else if (cartQuantity < 0) {
		alert("The cart is empty! (0)");
		cartQuantity = 0;
	} else {
		alert(`Cart Quantity: ${cartQuantity}`);
	}
}