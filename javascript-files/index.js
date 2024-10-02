// fetch("  https://fakestoreapi.com/products").then(res=>res.json()).then(data=>console.log(data))





// API Docs: https://fakestoreapi.com/
// Products API: https://fakestoreapi.com/products

// let row=document.querySelector('.row')
// let all_btn=document.querySelector("#btn1")
// async function fetchmethod(){
// fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>{data.forEach((ele)=>{
// // console.log(ele);


// // function truncates1(str1,length=10){
// //     if(str.length>10){
// //         return str.slice(0,length)+'...'
// //     }

// // }
// // let a2='Lorem ipsum dolor sit amet,'
// // console.log(truncates(a2))

    
// // let text = `${ele.title}`
// // console.log(text);
// // let finalText;

// // let titleTruncate = function(str){
// //     if(str.length > 12){
// //         finalText = str.substr(0,12) +'...';
// //     }
// //     console.log(finalText);
    
// // }
// // titleTruncate(text)


// let para=`${ele.description}`
// // console.log(para)
// function finaltext(str,length=10){
//     if(str.length>length){
//         return str.substr(0,74)+"..."
//     }
// }
// let final=finaltext(para)
// // console.log(final)


// let text=`${ele.title}`
// // console.log(text)
// function truncates(str,length=12){
//     if(str.length>length){
//         return str.substr(0,12)+"..."
//     }
// }
// let x=truncates(text)
// // console.log(x)

//     let result = `
//     <div class="col">
//             <div class="card" style="width: 22rem;">
//               <img src="${ele.image}" class="card-img-top p-2" style = 'width: 325px; height:325px;margin-left:17px'>
//               <div class="card-body">
//                 <h5 class="card-title text-center">${x}</h5>
//                 <p class="card-text text-center" style="font-size:20px">${final}</p>
//               </div>
//               <ul class="list-group list-group-flush">
               
//                 <li class="list-group-item text-center fs-5 text-secondary"><span style="padding-right:10px">$</span>${ele.price}</li>
//               </ul>
//               <div class="card-body" style="padding-left:80px">
//                 <button type="button" class="btn btn-dark">Details</button>
//                 <button onclick="addtocart()" type="button" class="btn btn-dark" >Add to Cart</button>
//               </div>
        
//           </div>
//     `;

    
//           row.insertAdjacentHTML("beforeend",result)




//           // function clickhandler(){
//           //   let m=ele.filter((data)=>{
//           //     if(data.category=="men's clothing"){
//           //       console.log(ele)
//           //     }
//           //   })

//           // }

//           // all_btn.addEventListener("click",clickhandler)


         
    
// })})}



// // fetchmethod()

// async function filtermethod(){
//   fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>
//     {


// function margind(data){
//       for(let a of data){
        
//         if (a.category == "men's clothing") {
//           console.log(a)
//           let c=`
//     <div class="col">
//             <div class="card" style="width: 22rem;">
//               <img src="${a.image}" class="card-img-top p-2" style = 'width: 325px; height:325px;margin-left:17px'>
//               <div class="card-body">
//                 <h5 class="card-title text-center">${a.title}</h5>
//                 <p class="card-text text-center" style="font-size:20px">${a.description}</p>
//               </div>
//               <ul class="list-group list-group-flush">
               
//                 <li class="list-group-item text-center fs-5 text-secondary"><span style="padding-right:10px">$</span>${a.price}</li>
//               </ul>
//               <div class="card-body" style="padding-left:80px">
//                 <button type="button" class="btn btn-dark">Details</button>
//                 <button type="button" class="btn btn-dark" >Add to Cart</button>
//               </div>
        
//           </div>
//     `;

//     row.insertAdjacentHTML('beforeend',c)
// //         }


//       }
//                function women(data){
//           for(value of data){
//     let filterdata=data
//             if(value.category=='jewelery'){
//               console.log(value)
//               let d = `
//               <div class="col">
//                       <div class="card" style="width: 22rem;">
//                         <img src="${value.image}" class="card-img-top p-2" style = 'width: 325px; height:325px;margin-left:17px'>
//                         <div class="card-body">
//                           <h5 class="card-title text-center">${value.title}</h5>
//                           <p class="card-text text-center" style="font-size:20px">${value.description}</p>
//                         </div>
//                         <ul class="list-group list-group-flush">
                         
//                           <li class="list-group-item text-center fs-5 text-secondary"><span style="padding-right:10px">$</span>${value.price}</li>
//                         </ul>
//                         <div class="card-body" style="padding-left:80px">
//                           <button type="button" class="btn btn-dark">Details</button>
//                           <button onclick="addtocart()" type="button" class="btn btn-dark" >Add to Cart</button>
//                         </div>
                  
//                     </div>
//               `;
          
              
//                     row.insertAdjacentHTML("beforeend",d)
          
          
          
          
//             }       
//            }       
          
//         } 
//     }
//     let category_btn=document.querySelector('#categoryButton')
//     category_btn.addEventListener('click', function(){
//       margind(data)
//     })
//   })}
  
//   filtermethod()

  

//      function womensCategory(){
//       fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>
//         {
        
//           function women(data){
//           for(value of data){
//             if(value.category=='jewelery'){
//               console.log(value)
//               let d = `
              // <div class="col">
              //         <div class="card" style="width: 22rem;">
              //           <img src="${value.image}" class="card-img-top p-2" style = 'width: 325px; height:325px;margin-left:17px'>
              //           <div class="card-body">
              //             <h5 class="card-title text-center">${value.title}</h5>
              //             <p class="card-text text-center" style="font-size:20px">${value.description}</p>
              //           </div>
              //           <ul class="list-group list-group-flush">
                         
              //             <li class="list-group-item text-center fs-5 text-secondary"><span style="padding-right:10px">$</span>${value.price}</li>
              //           </ul>
              //           <div class="card-body" style="padding-left:80px">
              //             <button type="button" class="btn btn-dark">Details</button>
              //             <button onclick="addtocart()" type="button" class="btn btn-dark" >Add to Cart</button>
              //           </div>
                  
              //       </div>
              // `;
          
              
//                     row.insertAdjacentHTML("beforeend",d)
          
          
          
          
//             }       
//            }       
          
//         }  
//         let jewel_btn=document.getElementById('womensbtn')
//         jewel_btn.addEventListener('click',function(){
//           women(data)
    
//         })      
          
//         }        
          
          
                   
              
//           )}
          
           
   
//     womensCategory()





//     //--------------------------------------------------------------







//     // womensCategory()
    




      
      
//       // data.((ele) => {
//       //   // console.log(ele);
//       // // console.log(data);

//       //   // console.log(`${ele.category}`)
        
//       //   let m = data.filter((ele1)=>{
//       //     // console.log(ele1);
//       //     if(ele1.category == "men's clothing"){
//       //       console.log(`${ele1.category}`);
            
//       //     }
          
//       //   })

//       // })
    
    
    
//     //   data.forEach((ele)=>{
//     // console.log(ele);
    
//     // let m=ele.filter((data)=>{
//     //       if(data.category=="men's clothing"){
//     //         console.log(data)
//     //       }


//     //     })})})}


// // );

// //     {data.forEach((ele)=>{
// //     console.log(ele);
    
// //     let m=ele.filter((data)=>{
// //           if(data.category=="men's clothing"){
// //             console.log(data)
// //           }
// //         })
        
// // }
// // filtermethod()
//   // )
//     // )})}
      




// // fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>console.log(data))


    
// // });` <div class="card" style="width: 18rem;">
// //             <img src="${img}" class="card-img-top" alt="...">
// //             <div class="card-body">
// //               <h5 class="card-title">${data.title}</h5>
// //               <p class="card-text">${data.description}</p>
// //             </div>
// //             <ul class="list-group list-group-flush">
             
// //               <li class="list-group-item">${data.price}</li>
// //             </ul>
// //             <div class="card-body">
// //               <button type="button" class="btn btn-dark">Details</button>
// //               <button type="button" class="btn btn-dark">Add to Cart</button>
// //             </div>
// //           </div>`)





// // let shoppingCart =document.getElementById('shopping_cart')
// // let label=document.getElementById('label')

// // fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>{data.forEach((ele)=>{
// //     // console.log(ele)
// //     let basket=JSON.parse(localStorage.getItem('data'))||[]

// //     let addtocart = (id,title,price,description,image)=>{
// //         basket.push({
// //             id:id,
// //             item:1,
// //            title:title,
// //            price:price,
// //            description:description,
// //            image:image

           
// //         })


// //         localStorage.setItem('data',JSON.stringify(basket))
// //     }
// //     let calculate=()=>{
// //         let cart_icon=document.getElementById("cart_amount")
// //         let cart_amount=basket.length
// //         cart_amount.innerHTML=cart_amount
// //     }

// //     calculate()
    


// // })})


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
              <button onclick="addCart(${product.id})" type="button" class="btn btn-dark" >Add to Cart</button>
            </div>
      
        </div>
  `;
            
            container.appendChild(card);
        });
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







//     let cartList=document.querySelector('.addchild')
// console.log(cartList);


// // console.log(cartItem)
// let div=document.createElement('div')
// function addCart(id){
//     let cartItem=allProducts.find((item)=>item.id===id)
//     //   console.log(item.id,id)
//       console.log(cartItem)
//     div.className="div"
//     div.innerHTML=` <div class="card " >
//       <h5 class="text-center">item</h5>
//      <div class="d-flex align-items-center" style="gap: 30px;">
//       <img src="${allProducts.img}" alt="jewel" style="width: 100px;">
//       <div>${allProducts.title}</div>
//       <button class="minus-btn">-</button>
//       <div class="quantity">1</div>
//       <button>+</button>

//       <div>${allProducts.price}</div>`
//       console.log(div);
//       console.log(cartList);
      
      
//     cartList.appendChild(div)
//   }


    // add to cart

  //   function addToCart(productId) {
  //     const product = allProducts.find(p => p.id === productId);
  //     let cart = JSON.parse(localStorage.setItem('cart')) || [];

  //     const existingProduct = cart.find(item => item.id === productId);
  //     if (existingProduct) {
  //         existingProduct.quantity += 1;
  //     } else {
  //         cart.push({ ...product, quantity: 1 });
  //     }

  //     localStorage.setItem('cart', JSON.stringify(cart));
  //     alert('Product added to cart');
  //     updateCartCount();
  // }

  // // Update cart count in header
  // function updateCartCount() {
  //     const cart = JSON.parse(localStorage.getItem('cart')) || [];
  //     const cartCount = cart.reduce((total, product) => total + product.quantity, 0);
  //     document.querySelector('.auth-links a').innerHTML = `<i class="fa-solid fa-cart-plus"></i> &nbsp; Cart (${cartCount})`;
  // }

  // // Update cart count when page loads
  // window.onload = updateCartCount;


// let cartList=document.getElementById('cartList')
// // console.log(cartItem)
// let div=document.createElement('div')
// function addCart(id){
//     let cartItem=allProducts.find((item)=>item.id===id)
//       // console.log(item.id,id)
//       console.log(cartItem)
    
//   }