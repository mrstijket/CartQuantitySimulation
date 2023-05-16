let cartQuantity = 0;
function showQuantity(){
	if(cartQuantity > 10){
		cartQuantity = 10;
		alert("The cart is full! (10)");
	} else if (cartQuantity < 0){
		cartQuantity = 0;
		alert("The cart is empty! (0)");
	} else {
		alert(`Cart Quantity: ${cartQuantity}`);
	}
}
