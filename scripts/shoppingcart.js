//fetch json products in folder
fetch("products.json")
.then(function(response){
   return response.json();
})
//set localstorage to images check application -> local storage
.then(function(data){
   localStorage.setItem("products", JSON.stringify(data));
   if(!localStorage.getItem("cart")){
      localStorage.setItem("cart", "[]");
   }
});

//variables to access local storage items
let products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart"));
var total_homemade = new Number(0.00);
let total_lactation = new Number(0.00);

function addItemToCart(productId){
    let product = products.find(function(item){
       return item.id == productId;
    });
  
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    
 }

 function removeItemFromCart(productId){
    let tempCart = cart.filter(item => item.id != productId);
    localStorage.setItem("cart", JSON.stringify(tempCart));
 }
 //removeItemFromCart(1);



 function updateQuantity(productId, quantity){
    for(let product of cart){
       if(product.id == productId){
          product.quantity = quantity;
       }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
 }
 //updateQuantity(1, 8);

 var cookie_1 = "Dark Chocolate Toffee";
 var cookie_2 = "Black and White Sesame";
 var cookie_3 = "TT - Milk Chocolate";
 var cookie_4 = "TT - Dark Chocolate Toffee";

 var quantity = 1;

 var homemade_price = new Number(18.00);
 var lactation_price = new Number(22.00);


//<img style = 'max-width:25%' src = '/assets/cookie_1.png'>
 function addHTMLProduct1(){
   total_homemade += 1.00
   document.getElementById("product").innerHTML+=`<div class = "text-center"><img class = "zoom" style = 'max-width:25%' src = '/assets/cookie_1.png'><h6 class = "col font_bold">${cookie_1}</h6><h6>${quantity}x</h6><h6>${homemade_price.toPrecision(4)}</h6><button onclick = "removeItemFromCart(1); this.parentNode.remove(); subtractHomemade(); calculateTotal();" style = "border: none; background-color: white;"><i class="bi bi-trash"></i></button><br><br><div>`
 }


 function addHTMLProduct2(){
   total_homemade += 1.00
   document.getElementById("product").innerHTML+=`<div class = "text-center"><img class = "zoom" style = 'max-width:25%' src = '/assets/cookie_4.png'><h6 class = "col font_bold">${cookie_2}</h6><h6>${quantity}x</h6><h6>${homemade_price.toPrecision(4)}</h6><button onclick = "removeItemFromCart(2); this.parentNode.remove(); subtractHomemade(); calculateTotal();" style = "border: none; background-color: white;"><i class="bi bi-trash"></i></button><br><br><div>`
 }

 function addHTMLProduct3(){
   total_lactation += 1.00
   document.getElementById("product").innerHTML+=`<div class = "text-center"><img class = "zoom" style = 'max-width:25%' src = '/assets/cookie_2.png'><h6 class = "col font_bold">${cookie_3}</h6><h6>${quantity}x</h6><h6>${lactation_price.toPrecision(4)}</h6><button onclick = "removeItemFromCart(3); this.parentNode.remove(); subtractLactation(); calculateTotal();" style = "border: none; background-color: white;"><i class="bi bi-trash"></i></button><br><br><div>`
 }

 
 function addHTMLProduct4(){
   total_lactation += 1.00
   document.getElementById("product").innerHTML+=`<div class = "text-center"><img class = "zoom" style = 'max-width:25%' src = '/assets/cookie_3.png'><h6 class = "col font_bold" >${cookie_4}</h6><h6>${quantity}x</h6><h6>${lactation_price.toPrecision(4)}</h6><button onclick = "removeItemFromCart(4); this.parentNode.remove(); subtractLactation(); calculateTotal();"style = "border: none; background-color: white;"><i class="bi bi-trash"></i></button><br><br><div>`
 }

 function subtractHomemade(){
   total_homemade -= 1.00;
 }
 
 function subtractLactation(){
   total_lactation -= 1.00;
 }


 function calculateTotal(){
   let total_lactation_price = (total_lactation * lactation_price) 
   let total_homemade_price = (total_homemade * homemade_price) 
   var full_price = new Number(total_lactation_price+total_homemade_price);
   document.getElementById("total").innerHTML = `TOTAL:&emsp; $${full_price}.00&emsp;`;
 }

