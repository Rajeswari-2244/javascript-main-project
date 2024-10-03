
let count =0
let sum=0
let cart={};
if(localStorage.getItem("count")){
 count=parseInt(localStorage.getItem("count"));
}
if(localStorage.getItem("sum")){
 sum=parseInt(localStorage.getItem("sum"))
}
if(localStorage.getItem("cart")){
  cart=JSON.parse(localStorage.getItem("cart"))

}
updateCart();

let allProducts = [];

    
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(products => {
        
         
            allProducts = products;
            // console.log(allProducts )
            displayProducts(allProducts);
             // Display all products by default
            
        })
        .catch(error => console.error('Error fetching data:', error));

    function displayProducts(products) {                                      
                                                                                         //  display products 
        const container = document.getElementById('product-container');
        container.innerHTML = '';                                                       // Clear the container
        
        products.forEach(product => {


          let text = `${product.title}`
          let finalText;

        let titleTruncate = function(str){
        if(str.length > 12){
        finalText = str.substr(0,12) +'...';
         }
        //  console.log(finalText);
    
         }
      
        titleTruncate(text)


        ///////////////////////////////////////////////

        let para=`${product.description}`
function finaltext(str,length=10){
    if(str.length>length){
        return str.substr(0,74)+"..."
    }
}
let final=finaltext(para)
// console.log(final)






          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `<div class="col" style:margin-left:47px>
          <div class="card  " style="width: 25rem; margin-top:-70px">
            <img src="${product.image}" class="card-img-top p-2" style = 'width: 325px; height:325px;margin-left:17px'>
            <div class="card-body">
              <h5 class="card-title text-center">${finalText}</h5>
              <p class="card-text text-center" style="font-size:20px">${final}</p>
            </div>
            <ul class="list-group list-group-flush">
             
              <li class="list-group-item text-center fs-5 text-secondary"><span style="padding-right:10px">$</span>${product.price}</li>
            </ul>
            <div class="card-body" style="padding-left:80px">
              <button type="button" class="btn btn-dark">Details</button>
              <button type="button" class="btn btn-dark addtocart-btn" data-price=${product.price} data-id=${product.id}  data-image=${product.image} data-title=${product.title}>Add to Cart</button>
            </div>
      
        </div>
  `;
            
            container.appendChild(card);
        });
        let btns=document.querySelectorAll(".addtocart-btn")
        for(let i=0;i<btns.length;i++){
          let btn=btns[i];
          btn.addEventListener("click",add)
          // console.log(btn);
          
        }
    }

    // Function to filter products by category
    function filterProducts(category) {
        if (category === 'all') {
            displayProducts(allProducts);
        } else {
            const filteredProducts = allProducts.filter(product => product.category === category);
            displayProducts(filteredProducts);
        }
}












  function add(event){
   let price=Number(event.target.dataset.price);
   let title=event.target.dataset.title;
   let id=event.target.dataset.id;
   let image=event.target.dataset.image
   if(id in cart){
    cart[id]=qty++;
   }
   else{
    let cartItem={
      title:title,
      price:price,
      image:image,
      qty:1
    }
    cart[id]=cartItem
   }
   count++
   sum+=price
   console.log(cart)
   localStorage.setItem("cart",JSON.stringify(cart));
   updateCart()
  }

function updateCart(){
  document.getElementById('carttt').textContent=count;
  document.getElementById("priceTotal").textContent=sum
  localStorage.setItem('sum',sum)
  localStorage.setItem("priceTotal",count)
}





