// fetch('https://dummyjson.com/products')
console.log('gates');
document.addEventListener('DOMContentLoaded', () => {
let body = document.querySelector('body');
let cart = document.querySelector('.cart');
let close = document.querySelector('#close');
let slides = document.querySelectorAll('.slider img');
let search = document.querySelector('nav input');
let searchbtn = document.getElementById('btn');
let category = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "skin-care",
    "smartphones",
    "sports-accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches"
  ]
let mavic = [];

cart.addEventListener('click',()=>{
    document.querySelector('.shopping-cart').classList.toggle('open');
    body.classList.toggle('mavic');
})
close.addEventListener('click',()=>{
    document.querySelector('.shopping-cart').classList.toggle('open');
    body.classList.toggle('mavic');
})

if(window.location.pathname.includes('index.html')){
    let slideindex = 0;
    // const slides = document.querySelectorAll('.slider')
function slider(images){

    for(let i=0; i<images.length; i++){
        images[i].style.display = 'none';
    }
    if(slideindex >= images.length){
        slideindex = 0;
    }
    images[slideindex].style.display = 'block';

    let v = setTimeout(next, 1000);

    images[slideindex].addEventListener('click',()=>{
        clearTimeout(v);
        images[slideindex].style.display = 'inline';
        setTimeout(()=>slider(slides),3500);
    })
}
function next(){
    slideindex++
    slider(slides)
}
slider(slides);
}



window.addEventListener('DOMContentLoaded',()=>{

    // cart items
    document.addEventListener('click',(e)=>{
        let y =  e.target.classList.contains('addtocart');
        if(y){
            addtocart(e.target);
            // console.log(e.target)
        }
    })      


    if(window.location.pathname.includes('index.html')){
        async function fetchelectronics(){
            let random = Math.ceil(Math.random()*(23-0)+0);
    
            let res = await fetch(`https://dummyjson.com/products/category/${category[random]}?limit=14`);
            let data = await res.json();
            console.log(data);
            let top = document.querySelector('.top-offers');
            let h1 = document.querySelector('#top');
            if(data.products.length< 14){
                less(data.products.length,top);
            }
            data.products.forEach(e => {
                let item = document.createElement('div');
                item.id = e.id;
                let p = document.createElement('p');
                let p1 = document.createElement('p1');
                let img = document.createElement('img');
                let btn = document.createElement('button');
                btn.className = 'addtocart';
                btn.innerHTML = 'add to cart';
                img.src = e.images[0];
                img.id = e.id;
                p.innerHTML = e.title;
                let total = (e.price*85.5)*80/100
                p1.innerHTML = `${'₹'} ${total.toFixed(0)}`;
                item.className = 'item';
                h1.innerHTML = e.category;
                item.appendChild(img);
                item.appendChild(p);
                item.appendChild(p1);
                item.appendChild(btn);
                top.appendChild(item);
                top.parentNode.insertBefore(h1,top);
            });
        }
        async function fetching(){
            let random = Math.ceil(Math.random()*(23-0)+0);
    
            let res = await fetch(`https://dummyjson.com/products/category/${category[random]}?limit=14`);
            let data = await res.json();
            console.log(data);
            let beauty = document.querySelector('.beauty');
            if(data.products.length< 14){
                less(data.products.length,beauty);
            }
            data.products.forEach(e => {
                let h1 = document.querySelector('#beauty');
                let item = document.createElement('div');
                item.id = e.id;
                let p = document.createElement('p');
                let p1 = document.createElement('p1');
                let img = document.createElement('img');
                let btn = document.createElement('button');
                btn.className = 'addtocart';
                btn.innerHTML = 'add to cart';
                img.src = e.images[0];
                img.id = e.id;
                p.innerHTML = e.title;
                let total = (e.price*85.5)*80/100
                p1.innerHTML = `${'₹'} ${total.toFixed(0)}`;
                item.className = 'item';
                h1.innerHTML = e.category;
                item.appendChild(img);
                item.appendChild(p);
                item.appendChild(p1);
                item.appendChild(btn);
                beauty.appendChild(item);
                beauty.parentNode.insertBefore(h1,beauty);
            });
        }
        async function fetched(){
            let random = Math.ceil(Math.random()*(23-0)+0);
    
            let res = await fetch(`https://dummyjson.com/products/category/${category[random]}?limit=14`);
            let data = await res.json();
            console.log(data);
            let sports = document.querySelector('.sports');
            if(data.products.length< 14){
                less(data.products.length,sports);
            }
            data.products.forEach(e => {
                let h1 = document.querySelector('#sports');    
                let item = document.createElement('div');
                item.id = e.id;
                let p = document.createElement('p');
                let p1 = document.createElement('p1');
                let img = document.createElement('img');
                let btn = document.createElement('button');
                btn.innerHTML = 'add to cart';
                btn.className = 'addtocart';
                img.id = e.id;
                img.src = e.images[0];
                p.innerHTML = e.title;
                let total = (e.price*85.5)*80/100
                p1.innerHTML = `${'₹'} ${total.toFixed(0)}`;
                item.className = 'item';
                h1.innerHTML = e.category;
                item.appendChild(img);
                item.appendChild(p);
                item.appendChild(p1);
                item.appendChild(btn);
                sports.appendChild(item);
                sports.parentNode.insertBefore(h1,sports);
            });
        }
        fetchelectronics();
        fetched();
        fetching();
        async function less(data,manju){
            let rand = Math.ceil(Math.random()*(23-0)+0);
            console.log('less than 14');
            let read = await fetch(`https://dummyjson.com/products/category/${category[rand]}?limit=${14-Number(data)}`);
            let info = await read.json();
            console.log('its extra',info)
            if(data+info.products.length< 14){
                less(data+info.products.length,manju);
            }
            info.products.forEach(f => {
                let item = document.createElement('div');
                let p = document.createElement('p');
                let p1 = document.createElement('p1');
                let img = document.createElement('img');
                let btn = document.createElement('button');
                btn.innerHTML = 'add to cart';
                btn.className = 'addtocart';
                img.id = f.id;
                img.src = f.images[0];
                p.innerHTML = f.title;
                let total = (f.price*85.5)*80/100
                p1.innerHTML = `${'₹'} ${total.toFixed(0)}`;
                item.className = 'item';
                item.appendChild(img);
                item.appendChild(p);
                item.appendChild(p1);
                item.appendChild(btn);
                manju.appendChild(item);
            });
        }
        searchbtn.addEventListener('click',()=>{

            if(window.location.pathname.includes('index.html')){
                localStorage.setItem('key',search.value);
                window.location.href = 'productlist.html';
            }
        });
    }
        let query;
        if(window.location.pathname.includes('productlist.html')){
            query = localStorage.getItem('key');
            console.log(query);
            searched(query);
        }
        async function searched(searched){
            let res = await fetch(`https://dummyjson.com/products/search?q=${searched}`);
            let data = await res.json();
            console.log(data);
            let productlist = document.querySelector('.productlist');
            // if(data.products.length<14){
            //     less(data.products.length,productlist)
            // }
            data.products.forEach(e=>{
                let h1 = document.querySelector('#category');    
                let item = document.createElement('div');
                let status = document.createElement('div');
                let rate = document.createElement('p');
                let availability = document.createElement('p');
                let p = document.createElement('p');
                let p1 = document.createElement('p1');
                let img = document.createElement('img');
                let btn = document.createElement('button');
                btn.innerHTML = 'add to cart';
                btn.className = 'addtocart';
                img.src = e.images[0];
                img.id = e.id;
                p.innerHTML = e.title;
                let total = (e.price*85.5);
                p1.innerHTML = `${'₹'} ${total.toFixed(0)}`;
                item.className = 'item';
                status.className = 'rating';
                h1.innerHTML = e.category;
                rate.innerHTML = e.rating.toFixed(1) + '☆';
                if(e.rating >= 3){
                    rate.style.color = 'green';
                }
                else{
                    rate.style.color = 'red';
                }
                availability.innerHTML = e.availabilityStatus;
                status.appendChild(rate);
                status.appendChild(availability);
                item.appendChild(img);
                item.appendChild(p);
                item.appendChild(p1);
                item.appendChild(status);
                item.appendChild(btn);
                productlist.appendChild(item);
                productlist.parentNode.insertBefore(h1,productlist);
            })
        }

    async function addtocart(element){
        let productid;
        let parent = element.parentElement;
        if(element.classList.contains('addproducttocart')){
            let pimages = document.querySelector('.productimage>img');
            productid = pimages.getAttribute('id');
        }
        else{
            productid = parent.querySelector('img').getAttribute('id');
        }

        let res = await fetch(`https://dummyjson.com/products/${productid}`);
        let data = await res.json();
        let cartproducts = document.querySelector('.cartproducts');
        let productcart = document.createElement('div');
        productcart.className = 'product-cart';
        let price = document.createElement('div');
        let p = document.createElement('p');
        let img = document.createElement('img');
        img.src = data.images[0];
        img.id = data.id;
        p.innerHTML = data.title;
        let pre = document.createElement('pre');
        pre.innerHTML = `₹` +((data.price*85.5)*80/100).toFixed(0); 
        productcart.append(img);
        price.append(p);
        price.append(pre);
        productcart.append(price);
        let incre = document.createElement('div');
        incre.id = 'incre';
        let p1 = document.createElement('p')
        p1.innerHTML = '-';
        let p2 = document.createElement('p')
        p2.innerHTML = 0;
        let p3 = document.createElement('p')
        p3.innerHTML = '+';
        incre.append(p1)
        incre.append(p2)
        incre.append(p3)
        productcart.append(incre);
        cartproducts.append(productcart);
        mavic.push(productcart);
        console.log(mavic)
    }

    // document.addEventListener('click',(e)=>{
    //     let y =  e.target.classList.contains('addtocart');
    //     if(y){
    //         addtocart(e.target);
    //     }
    // })

    if(window.location.pathname.includes('productlist.html')||(window.location.pathname.includes('index.html'))||(window.location.pathname.includes('productdescription.html'))){
        document.addEventListener('click',(e)=>{
            if(e.target.tagName === 'IMG' && e.target.parentElement.classList.contains('item')){
                localStorage.setItem('id',e.target.id);
                setTimeout(() => {
                    window.location.href = 'productdescription.html'
                }, 500);
            }
        })
    }

    if(window.location.pathname.includes('productdescription.html')){
        let clicked = localStorage.getItem('id');
        description(clicked);
    }
    async function description(product){
        let res = await fetch(`https://dummyjson.com/products/${product}`);
        let data = await res.json();
        console.log(data);
        let sliders = document.querySelector('.sliderimages');
        let productimage = document.querySelector('.productimage');
        let image = document.createElement('img');
        let images = data.images;
        var random = data.category;
        same(random)
        console.log(random)
        for (let i = 0; i < images.length; i++) {
            let img = document.createElement('img');
            img.src = images[i];
            img.id = data.id;
            sliders.appendChild(img);            
        }
        image.id = data.id;
        image.src = images[0];
        productimage.appendChild(image);
        sliders.addEventListener('click',(e)=>{
            if(e.target.tagName === 'IMG'){
               let source = e.target.getAttribute('src');
                // console.log(source);
                image.id = data.id;
                image.src = source;
                productimage.appendChild(image);
            }
        })
        let details = document.querySelector('.details');
        let name = document.createElement('h3');
        let div = document.createElement('div');
        let r = document.createElement('div');
        let rdiv = document.createElement('div');
        let rdivp = document.createElement('p');
        let rp = document.createElement('p');
        let price = document.createElement('h3');
        let p = document.createElement('p');
        let policy = document.createElement('p');
        r.className = 'r';
        name.textContent = data.title;
        rdivp.innerHTML = data.rating + ' ★';
        rp.innerHTML = 'rating';
        price.textContent= `₹` +((data.price*85.5)*80/100).toFixed(0);
        p.innerHTML = `<del>₹${(data.price * 85.5).toFixed(0)}</del>`
        policy.innerHTML = data.returnPolicy;
        rdiv.append(rdivp);
        r.append(rdiv);
        r.append(rp);
        div.appendChild(r);
        details.append(name);
        details.append(div);
        details.append(price);
        details.append(p);
        details.append(policy);
    }


    async function same(random){
        let res = await fetch(`https://dummyjson.com/products/category/${random}?limit=14`);
        let data = await res.json();
        console.log(data);
        let top = document.querySelector('.same-products');
        let h1 = document.querySelector('#top');
        data.products.forEach(e => {
            let item = document.createElement('div');
            item.id = e.id;
            let p = document.createElement('p');
            let p1 = document.createElement('p1');
            let img = document.createElement('img');
            let btn = document.createElement('button');
            btn.className = 'addtocart';
            btn.innerHTML = 'add to cart';
            img.src = e.images[0];
            img.id = e.id;
            p.innerHTML = e.title;
            let total = (e.price*85.5)*80/100
            p1.innerHTML = `${'₹'} ${total.toFixed(0)}`;
            item.className = 'item';
            // h1.innerHTML = e.category;
            item.appendChild(img);
            item.appendChild(p);
            item.appendChild(p1);
            item.appendChild(btn);
            top.append(item);
            // top.parentNode.insertBefore(h1,top);
        });
    }
})
});
    
