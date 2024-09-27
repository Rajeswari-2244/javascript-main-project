// fetch("  https://fakestoreapi.com/products").then(res=>res.json()).then(data=>console.log(data))





// API Docs: https://fakestoreapi.com/
// Products API: https://fakestoreapi.com/products

let row=document.querySelector('.row')

fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>{data.forEach((ele)=>{
// console.log(ele);


// function truncates1(str1,length=10){
//     if(str.length>10){
//         return str.slice(0,length)+'...'
//     }

// }
// let a2='Lorem ipsum dolor sit amet,'
// console.log(truncates(a2))

    
// let text = `${ele.title}`
// console.log(text);
// let finalText;

// let titleTruncate = function(str){
//     if(str.length > 12){
//         finalText = str.substr(0,12) +'...';
//     }
//     console.log(finalText);
    
// }
// titleTruncate(text)


let para=`${ele.description}`
console.log(para)
function finaltext(str,length=10){
    if(str.length>length){
        return str.substr(0,74)+"..."
    }
}
let final=finaltext(para)
console.log(final)


let text=`${ele.title}`
console.log(text)
function truncates(str,length=12){
    if(str.length>length){
        return str.substr(0,12)+"..."
    }
}
let x=truncates(text)
console.log(x)

    let result = `
    <div class="col">
            <div class="card" style="width: 22rem;">
              <img src="${ele.image}" class="card-img-top p-2" style = 'width: 325px; height:325px;margin-left:17px'>
              <div class="card-body">
                <h5 class="card-title text-center">${x}</h5>
                <p class="card-text text-center" style="font-size:20px">${final}</p>
              </div>
              <ul class="list-group list-group-flush">
               
                <li class="list-group-item text-center fs-5 text-secondary"><span style="padding-right:10px">$</span>${ele.price}</li>
              </ul>
              <div class="card-body" style="padding-left:80px">
                <button type="button" class="btn btn-dark">Details</button>
                <button type="button" class="btn btn-dark">Add to Cart</button>
              </div>
        
          </div>
    `;

    // let result=document.createElement("div")
          row.insertAdjacentHTML("beforeend",result)
    
})})




// fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>console.log(data))


    
// });` <div class="card" style="width: 18rem;">
//             <img src="${img}" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${data.title}</h5>
//               <p class="card-text">${data.description}</p>
//             </div>
//             <ul class="list-group list-group-flush">
             
//               <li class="list-group-item">${data.price}</li>
//             </ul>
//             <div class="card-body">
//               <button type="button" class="btn btn-dark">Details</button>
//               <button type="button" class="btn btn-dark">Add to Cart</button>
//             </div>
//           </div>`)



