


let cart1={}
if(localStorage.getItem("cart")){
  cart1=JSON.parse(localStorage.getItem("cart"))
  console.log(cart1)

}
else{
  
  let variable=document.getElementById('empty')
  variable.innerHTML=`
  <div class="fs-3 d-flex justify-content-center align-items-center fw-bold">Cart</div>
  <hr class="mx-5">
  <p class="d-flex justify-content-center align-items-center fs-1 " style="margin-top: 100px;">Your Cart is Empty</p>
  <a href="../html-files/index.html" class="text-decoration-none d-flex justify-content-center align-items-center mt-1"><button type="button" class="btn btn-outline-dark ms-3 d-flex justify-content-center align-items-center"><i class="fa-solid fa-arrow-left"></i>Continue Shopping</button></a>`


}

let main2=document.getElementById("cartList")
 let main=document.createElement("div")
  main.setAttribute('class','card')
  main2.appendChild(main)
  let main3=document.createElement('h5')
  main3.setAttribute('class','text-center')
  let main4=document.createTextNode("item ")
  main3.appendChild(main4)
  main2.appendChild(main3)
  console.log(main2)



for(let id in cart1){

  let item=cart1[id]
  console.log(item)
main3.innerHTML+=`
<div class="card ">
      
     <div class="d-flex align-items-center" style="gap: 30px;">
      <img src=${item.image} alt="jewel" style="width: 100px;">
      <div>${item.title}</div>
      <button class="minus-btn">-</button>
      <span>${item.qty}</span>
      <button>+</button>

      <div>${item.qty}*${item.price}</div>`
 
//   let main2=document.getElementById("cartList")
//  let main=document.createElement("div")
//   main.setAttribute('class','card')
//   main2.appendChild(main)
//   let main3=document.createElement('h5')
//   main3.setAttribute('class','text-center')
//   let main4=document.createTextNode("item ")
//   main3.appendChild(main4)
//   let main5=document.createElement('div')
//   main5.setAttribute('class','d-flex align-items-center')
//   main5.setAttribute('style','gap: 90px')
//   let image=document.createElement('img')
//   image.setAttribute('src',`${item.image}`)
//   image.setAttribute('style','width:100px')
//   let category=document.createElement('div')
//   let category1=document.createTextNode(`${item.title}`)
//   let btn_cat=document.createElement('button')
//   btn_cat.setAttribute('class','minus-btn')
//   // btn_cat.setAttribute("style",'
//   // padding-left:30px')
//   let btn_cat1=document.createTextNode('-')
//   let quan=document.createElement('div')
//   quan.setAttribute('class','quantity')
//   let quan1=document.createTextNode('1')
//   let btn_2=document.createElement('button')
//   let btn_21=document.createTextNode('+')


//   main.appendChild(main3)
//   main3.appendChild(main5)
//   main2.appendChild(image)
//   main2.appendChild(category1)
//   main2.appendChild(btn_cat1)
//   main2.appendChild(quan1)
//   main2.appendChild(btn_21)
  
// console.log(main2);







  






}
// for(let id in cart1){
let priceTotal = +localStorage.getItem('sum');
console.log(priceTotal);

let totalCount = priceTotal + 30;
let finalcart=document.getElementById('hello')
// finalcart.setAttribute('class','amount col-lg-4')
let final1=document.createElement('div')
final1.setAttribute('class','card')
final1.setAttribute('style','width:300px')


final1.innerHTML=`<div class="amount col-lg-3 position-absolute top-0 right-0">
    <div class="card"style="width:300px">
     <div class="text-center">order summary</div>
     <div class="d-flex"style="justify-content:space-between">
     <p>Products</p>
    <p>$ ${priceTotal}</p></div>
     <div class="d-flex"style="justify-content:space-between"><p>summary</p>
    <p>$30</p></div>
     <div class="d-flex"style="justify-content:space-between"><p>Total amount</p>
    <p>$ ${totalCount}</p></div>
    <div class="btn_last text-center" style="border: 1px solid black;">Go to checkout</div>
    </div> 

 </div>`

 console.log(cart1);
 

finalcart.appendChild(final1)

console.log(finalcart)
// }
// let countt=0
// for(let id in cart1){
//   countt++

  
// }
