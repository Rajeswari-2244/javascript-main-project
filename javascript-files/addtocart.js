

let main=document.createElement("div")
let main3=document.createElement('h5')
let main4=document.createTextNode("item ")
let item

let cart1={}
let itemquantity
if(localStorage.getItem("cart")){
  cart1=JSON.parse(localStorage.getItem("cart"))
//   console.log(cart1)

  let main2=document.getElementById("cartList")

  main.setAttribute('class','card')
  main2.appendChild(main)

  main3.setAttribute('class','text-center')

  main2.appendChild(main)
  main.appendChild(main3)
  main3.appendChild(main4)
//   console.log(main2)

console.log(main2);
//   console.log(cart1)



for(let id in cart1){

     item=cart1[id]
    // console.log(item)
    itemquantity=item.qty
    console.log(itemquantity)
  main.innerHTML+=`
  
        
       <div class="d-flex align-items-center" id="remove1" style="gap: 30px;">
        <img src=${item.image} alt="jewel" style="width: 100px;">
        <div>${item.title}</div>
        <button class="minus-btn"  id="minus" onclick=delete1()>-</button>
        <span>${item.qty}</span>
        <button>+</button>
  
        <div>${item.qty}*${item.price}</div>`
}
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




function delete1(){
let minus=document.getElementById("minus")
// alert('hello')
if(itemquantity<1){
    var removeele=document.getElementById("remove1")
    removeele.parentNode.removeChild(removeele)
}

}


// for(let id in cart1){

//   let item=cart1[id]
//   console.log(item)
// main.innerHTML+=`

      
//      <div class="d-flex align-items-center" style="gap: 30px;">
//       <img src=${item.image} alt="jewel" style="width: 100px;">
//       <div>${item.title}</div>
//       <button class="minus-btn"  id="minus" onclick=delete1()>-</button>
//       <span>${item.qty}</span>
//       <button>+</button>

//       <div>${item.qty}*${item.price}</div>`
 






  

// item2.appendChild(main)




// }
// for(let id in cart1){
let priceTotal = +localStorage.getItem('sum');
console.log(priceTotal);

let totalCount = priceTotal + 30;
let finalcart=document.getElementById('hello')
// // finalcart.setAttribute('class','amount col-lg-4')
// let final1=document.createElement('div')
// final1.setAttribute('class','card')
// final1.setAttribute('style','width:300px')
// main2.appendChild(final1)

finalcart.innerHTML=`
     <div class="card"style="width:300px">
     <div class="text-center">order summary</div>
     <div class="d-flex"style="justify-content:space-between">
      <p>products</p>
    <p>$${priceTotal}</p>
  </div>
     <div class="d-flex"style="justify-content:space-between"><p>summary</p>
    <p>$30</p></div>
     <div class="d-flex"style="justify-content:space-between"><p>total count</p>
    <p>$${totalCount}</p></div>
    <div class="btn_last text-center" style="border: 1px solid black;">Go to checkout</div>
    </div>  

 `

 console.log(cart1);
 

// finalcart.appendChild(final1)

console.log(finalcart)
// }
// let countt=0
// for(let id in cart1){
//   countt++

  
// }
