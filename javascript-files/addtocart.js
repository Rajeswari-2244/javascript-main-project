// let cart = {};
// if (localStorage.getItem("cart")) {
//     cart = JSON.parse(localStorage.getItem("cart"));
// } else {
//     alert("Cart is empty");

//     text = "Cart is empty. ";
//     document.getElementById("table-container").innerHTML = text;

//     let goBack = document.createElement("a");
//     goBack.href = "index.html";
//     goBack.textContent = "Go back";
//     document.getElementById("table-container").appendChild(goBack);
// }

// let tbody = document.getElementById("tbody");

// for (let id in cart) {
//     let item = cart[id];

//     let tr = document.createElement('tr')

//     let title_td = document.createElement('td')
//     title_td.textContent = item.title
//     tr.appendChild(title_td)


//     let price_td = document.createElement("td");
//     price_td.textContent = item.price;
//     tr.appendChild(price_td);

//     let qty_td = document.createElement("td");
//     qty_td.textContent = item.qty;
//     tr.appendChild(qty_td);

//     tbody.appendChild(tr)

// }



let cart1={}
if(localStorage.getItem("cart")){
  cart1=JSON.parse(localStorage.getItem("cart"))
  console.log(cart1)

}
else{
  // alert("cart is empty")
  // text="Cart Is Empty"
  // document.getElementById("empty").innerHTML=text
  let variable=document.getElementById('empty')
  variable.innerHTML=`
  <div class="fs-3 d-flex justify-content-center align-items-center fw-bold">Cart</div>
  <hr class="mx-5">
  <p class="d-flex justify-content-center align-items-center fs-1 " style="margin-top: 100px;">Your Cart is Empty</p>
  <a href="../html-files/index.html" class="text-decoration-none d-flex justify-content-center align-items-center mt-1"><button type="button" class="btn btn-outline-dark ms-3 d-flex justify-content-center align-items-center"><i class="fa-solid fa-arrow-left"></i>Continue Shopping</button></a>`


}

for(let id in cart1){

  let item=cart1[id]
  console.log(item)

 
  let main2=document.getElementById("cartList")
 let main=document.createElement("div")
  main.setAttribute('class','card')
  main2.appendChild(main)
  let main3=document.createElement('h5')
  main3.setAttribute('class','text-center')
  let main4=document.createTextNode("items")
  main3.appendChild(main4)
  let main5=document.createElement('div')
  main5.setAttribute('class','d-flex align-items-center')
  main5.setAttribute('style','gap: 90px')
  let image=document.createElement('img')
  image.setAttribute('src',`${item.image}`)
  image.setAttribute('style','width:100px')
  let category=document.createElement('div')
  let category1=document.createTextNode('mens cotton jewel')
  let btn_cat=document.createElement('button')
  btn_cat.setAttribute('class','minus-btn')
  let btn_cat1=document.createTextNode('-')
  let quan=document.createElement('div')
  quan.setAttribute('class','quantity')
  let quan1=document.createTextNode('1')
  let btn_2=document.createElement('button')
  let btn_21=document.createTextNode('+')


  main.appendChild(main3)
  main3.appendChild(main5)
  main2.appendChild(image)
  main2.appendChild(category1)
  main2.appendChild(btn_cat1)
  main2.appendChild(quan1)
  main2.appendChild(btn_21)
  
// console.log(main2);





  






}


let finalcart=document.getElementById('hello')
// finalcart.setAttribute('class','amount col-lg-4')
let final1=document.createElement('div')
final1.setAttribute('class','card')
final1.setAttribute('style','width:300px')

final1.innerHTML=`<div class="amount col-lg-3">
    <div class="card"style="width:300px">
     <div class="text-center">order summary</div>
     <div class="d-flex"style="justify-content:space-between"><p>products${cart1.length}</p>
    <p>$1149</p></div>
     <div class="d-flex"style="justify-content:space-between"><p>summary</p>
    <p>$30</p></div>
     <div class="d-flex"style="justify-content:space-between"><p>Total amount</p>
    <p>$1179</p></div>
    <div class="btn_last text-center" style="border: 1px solid black;">Go to checkout</div>
    </div> 

 </div>`

 console.log(cart1);
 

finalcart.appendChild(final1)

console.log(finalcart)
