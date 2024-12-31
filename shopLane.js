let clothingSection = document.getElementById("clothing-section");
let accessoriesSection = document.getElementById("acessories-section");
let cartCountElement = document.getElementById("cart-count");
let signUpBtnElement = document.getElementById("signup-btn");
let loginFormElement = document.getElementById("login-form");

let cartItemsFromLocalStorage =JSON.parse(localStorage.getItem("cartItems")) 

if(cartItemsFromLocalStorage != null){
    cartCountElement.innerText = cartItemsFromLocalStorage.length;
}

axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
.then((res)=>{
   let products = res.data;
   products.map((item,i)=>{
    if(item.isAccessory == false){
    clothingSection.innerHTML += `
    <div class="product-card" onclick="productClicked('${item.id}')">
        <img src="${item.preview}"/>
        <div class="product-deatils">
            <h3>${item.name}</h3>
            <p>${item.brand}</p>
            <p style="color:rgb(38, 189, 128);">Rs.${item.price}</p>
        </div>
    </div>
    `
    }
    else{
        accessoriesSection.innerHTML += `
        <div class="product-card" onclick="productClicked('${item.id}')">
            <img src="${item.preview}"/>
            <div class="product-deatils">
                <h3>${item.name}</h3>
                <p>${item.brand}</p>
                <p style="color:rgb(38, 189, 128);">Rs.${item.price}</p>
            </div>
        </div>
        `
    }
   })
})
function productClicked(id){
    location.assign(`http://127.0.0.1:5500/specification.html?p_id=${id}`);
}

signUpBtnElement.addEventListener("click", ()=> {
    loginFormElement.innerHTML =`
    <button id="signup-btn"><i class="fa-solid fa-user header-icons" id="signUp"></i>  </button>
     <form class="login-form">
              <p>Name: </p><input type="text" placeholder="Name" class="boxStyle" required/><br><br>
              <p>Password: </p><input type="password" placeholder="Password" class="boxStyle" required/><br><br>
              <p><button type="submit"  class="boxStyle" id="login-btnStyle" onClick="()=>{loginShoplane()}">Login</button></p>
          </form>
 `   
})

loginShoplane()
{
    innerHTML="";

}