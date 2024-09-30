let shoppingCart =document.getElementById('shopping_cart')
let label=document.getElementById('label')

fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>{data.forEach((ele)=>{
    console.log(ele)
    let basket=JSON.parse(localStorage.getItem('data'))||[]

    let addtocart = (id,title,price,description,image)=>{
        basket.push({
            id:id,
            item:1,
           title:title,
           price:price,
           description:description,
           image:image


        })


        localStorage.setItem('data',JSON.stringify(basket))
    }
    let calculate=()=>{
        let cart_icon=document.getElementById("cart_amount")
        let cart_amount=basket.length
        cart_amount.innerHTML=cart_amount
    }


    


})})