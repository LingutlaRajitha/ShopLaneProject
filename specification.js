let p_id = location.search.split("=")[1]
let specificationContainer = document.getElementById("specification-container")
let cartCountElement = document.getElementById("cart-count");

let cartItemsFromLocalStorage = JSON.parse(localStorage.getItem("cartItems"));
if(cartItemsFromLocalStorage != null){
cartCountElement.innerText = cartItemsFromLocalStorage.length;
}

axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${p_id}`)
.then((Res) => {
        let productData = Res.data
        specificationContainer.innerHTML = `
     <div id="specificationImage-section">
      <img id="specificationImage"
        src= ${productData.preview} />
     </div>
  <div id="specificationClothing-details">
    <h2 id="name">${productData.name}</h2>
    <h4 id="brand">${productData.brand}</h4>
    <h3 id="price">Price: Rs <span id="price">${productData.price}</span></h3>
    <div class="description">
        <h3>Description</h3>
        <p id="description">${productData.description}</p>
    </div>
    <h4>Product preview</h4>
    <div id="product-preview">
           
    </div>
    <button 
    onclick="addToCart('${productData.name}', '${productData.price}', '${productData.preview}')"
    class="add-to-cart-btn" >
     Add to Cart 
     </button>
  </div>`

        let productPreviewSection = document.getElementById("product-preview")
        productData.photos.map((item, i) => {
            productPreviewSection.innerHTML += `
      <div class="product-preview-card">
        <img  id="img${i}" 
              onclick="productPreviewClicked('img${i}')"
              class="product-preview-image ${i == 0 ? 'active' : ""}"
              src="${item}"/>
      </div> `
        })
    })



function productPreviewClicked(id) {
    document.getElementsByClassName("active")[0].classList.remove("active");
    document.getElementById(id).classList.add("active");
    let specificationimage = document.getElementById("specificationImage");
    specificationimage.src = document.getElementById(id).src;
}


function addToCart(name, price, image){
    /*[ {Name: "Men Black Action Parkview Lifestyle Shoes", src:"" , price:" 2999"},{Name: "Men Black shirt", src:"" , price:" 1599"}]*/
    let obj = {
        productName : name,
        productPrice: price,
        productImg : image
    }

    let cartItemsFromLocalStorage = JSON.parse(localStorage.getItem("cartItems"));
    if(cartItemsFromLocalStorage == null){
        let cartItems = []
        cartItems.push(obj);//[{}]
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        cartCountElement.innerText = cartItems.length;

    }
    else{
        //[ {} ]
        let cartItemsFromLocalStorage = JSON.parse(localStorage.getItem("cartItems"));
        cartItemsFromLocalStorage.push(obj);//[ {} , {} ]
        localStorage.setItem("cartItems", JSON.stringify(cartItemsFromLocalStorage));
        cartCountElement.innerText = cartItemsFromLocalStorage.length;
    }
}
















































