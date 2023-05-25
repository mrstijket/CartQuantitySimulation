let cartQuantity = JSON.parse(localStorage.getItem('quantity')) || 0;
showQuantity();
localStorage.getItem('quantity');
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
	localStorage.setItem('quantity', JSON.stringify(cartQuantity));
	showQuantity();
}
function showQuantity() {
	if (cartQuantity > 10) {
		document.querySelector('.js-quantity').innerHTML = "The cart is full! (10)";
		cartQuantity = 10;
	} else if (cartQuantity < 0) {
		document.querySelector('.js-quantity').innerHTML = "The cart is empty! (0)";
		cartQuantity = 0;
	} else {
		document.querySelector('.js-quantity').innerHTML = `Cart Quantity: ${cartQuantity}`;
	}
}