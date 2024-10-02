
let cartList=document.getElementById('cartList')
// console.log(cartList);


// console.log(cartItem)
let div=document.createElement('div')
function addCart(id){
    let cartItem=allProducts.find((item)=>item.id===id)
    //   console.log(item.id,id)
      console.log(cartItem)
    div.className="div"
    div.innerHTML=` <div class="card " >
      <h5 class="text-center">item</h5>
     <div class="d-flex align-items-center" style="gap: 30px;">
      <img src="${allProducts.img}" alt="jewel" style="width: 100px;">
      <div>${allProducts.title}</div>
      <button class="minus-btn">-</button>
      <div class="quantity">1</div>
      <button>+</button>

      <div>${allProducts.price}</div>`
    //   console.log(div);
    //   console.log(cartList);
      
      
    cartList.appendChild(div)
  }


// function updatecart(){
//     alert('1')


// }








