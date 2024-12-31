let cartItemsFromLocalStorage = JSON.parse(localStorage.getItem("cartItems"));
let cartCountElement = document.getElementById("cart-count");
let cartSection = document.getElementById("cart-section");
let billElement = document.getElementById("bill");
let amountFromLocalStorage = document.getElementById("amountSection");
let productSection = document.getElementById("product-section");


if(cartItemsFromLocalStorage != null){
    cartCountElement.innerText = cartItemsFromLocalStorage.length;
    let price = cartItemsFromLocalStorage.reduce((acc, item, i) => {
            return acc + parseFloat(item.productPrice)
    },0)
    console.log(price);
    billElement.innerText = price;
}
else{
    billElement.innerText  = 0;
}

cartItemsFromLocalStorage.map((item,i) => {
    cartSection.innerHTML += `
    <div class="cart-product-card">
        <img src= "${item.productImg}"/>
        <div class="product-details">
            <h3>${item.productName}</h3>
            <p style="color:rgb(38, 189, 128);">Rs.${item.productPrice}</p>
        </div>
        <div id="removeBtn">
         <button 
    onclick="removeFromCart(${i})"
    class="remove-from-cart-btn" >
    Remove
     </button>
     </div>
    </div>`
})

function removeFromCart(index){
    let cartItemsFromLocalStorage = JSON.parse(localStorage.getItem("cartItems"));
    cartItemsFromLocalStorage.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(cartItemsFromLocalStorage))
    location.reload();
}  

function placeOrder(){
    localStorage.removeItem("cartItems");
    alert("Your order has been successfully placed!!");
     // Remove the amount section from the DOM
     amountFromLocalStorage.remove();

     // Display the order placed confirmation image in the cart section
     productSection .innerHTML = `
     <div id="placedOrder">
         <img src="https://img.freepik.com/premium-vector/online-fast-delivery-services-buy-ecommerce-express-delivery-mobile-concept-by-phone_107661-498.jpg?w=740"/>
     </div>
     `;
    // location.reload();
   
}  

