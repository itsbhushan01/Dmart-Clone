//seerach
const place=["butter","sugar","tea","salt","ghee","rice","chips","milk","curd","Pulses"]
let index=0;
const animatedPlaceholder=document.getElementById("animantedPlaceholder")

function movingPlaceholder(){
    animatedPlaceholder.style.animation ='changeValue 0.5s forwards'

    setTimeout(() => {
        index=(index+1)%place.length
        animatedPlaceholder.textContent=`Search "${place[index]}"`;
        animatedPlaceholder.style.animation='InChangeValue 0.5s forwards'

        
    }, 400);
}
movingPlaceholder()
setInterval(movingPlaceholder,3000)

document.addEventListener('DOMContentLoaded',()=>{
    const openButton=document.getElementById('openSidebar')
    const closeButton=document.getElementById('closeSidebar')
    const offcanvass=document.getElementById('offcanvass')

    openButton.addEventListener("click",()=>{
        offcanvass.classList.add('active')
    })

    closeButton.addEventListener("click",()=>{
        offcanvass.classList.remove('active')
    })
})

//cart li
document.addEventListener('DOMContentLoaded',()=>{
    const openCartButton=document.getElementById('openCartSidebar')
    const closeCartButton=document.getElementById('closeCartSidebar')
    const offcanvasss=document.getElementById('offcanvasss')

    openCartButton.addEventListener("click",()=>{
        offcanvasss.classList.add('active')
    })

    closeCartButton.addEventListener("click",()=>{
        offcanvasss.classList.remove('active')
    })
})

document.addEventListener('DOMContentLoaded',()=>{
    let slider=document.getElementById("slider")
    let slides=document.querySelectorAll(".slides")
    let prevArrow=document.getElementById("prevArrow")
    let nextArrow=document.getElementById("nextArrow")

    let currentIndex=0;

    const updateSlider=()=>{
        slider.style.transform=`translateX(-${currentIndex*15}%)`
    }

    prevArrow.addEventListener('click',()=>{
        currentIndex=(currentIndex-1 +slides.length)%slides.length;
        updateSlider()
    })
    nextArrow.addEventListener('click',()=>{
        currentIndex=(currentIndex+1)%slides.length;
        updateSlider()
    })
    
})

const saleEndDate=new Date("2025-12-31T15:22:59").getTime()


// //update the time countdown in every second
  const timer=setInterval(function(){
      const now=new Date().getTime()
      const timeLeft=saleEndDate-now;
      
      if(timeLeft>=0){
          const days=Math.floor(timeLeft/(1000*60*60*24))
          const hours=Math.floor((timeLeft%(1000*60*60*24))/(1000*60*60))
         const minutes=Math.floor((timeLeft%(1000*60*60))/(1000*60))
         const seconds=Math.floor((timeLeft%(1000*60))/1000)
        if(minutes<=1)
        {
            document.getElementById("countdown").style.color='red'
        }

      document.getElementById("countdown").innerHTML=
      `${days}d : ${hours}h : ${minutes}m : ${seconds}s`
      }
      else{
          clearInterval(timer)
          document.getElementById("countdown").innerHTML="00:00:00:00"
          document.getElementById("message").innerHTML="The sale has ended"
      }
  },1000)

let openshopping=document.querySelector('.shopping')
let closeShopping=document.getElementById("closeCartSidebar")
let list=document.querySelector('.list')
let listCard=document.querySelector('.listCard')
let offcanvasss=document.querySelector('.offcanavasss')
let total=document.querySelector('.total')
let quantity=document.querySelector('.quantity')
let totalsaving=document.querySelector('.totalsaving')

openshopping.addEventListener('click',()=>{
    offcanvasss.classList.add('active')
})
closeShopping.addEventListener('click',()=>{
    offcanvasss.classList.remove('active')
})

let products=[
    {
        id:1,
        image_main:'.././image/AUG120004798xx9AUG23_5_P.jpg',
        image_circle:'.././image/svgviewer-png-output (1).png',
        name:'Oreal Paris Extraordinary Oil Serum : 100 ml',
        old_Price:499,
        new_Price:299,
        discount_price:200,
        weight:'100ml (rs.2.99/ml)'

       
    },

    {
        id:2,
        image_main:'.././image/AUG120004798xx9AUG23_5_P.jpg',
        image_circle:'.././image/svgviewer-png-output (1).png',
        name:'Oreal Paris Extraordinary Oil Serum : 100 ml',
        old_Price:399,
        new_Price:199,
        discount_price:100,
        weight:'100ml (rs.2.99/ml)'

       
    },

    {
        id:3,
        image_main:'.././image/DEC120001738xx6DEC22_5_P.jpg',
        image_circle:'.././image/svgviewer-png-output (1).png',
        name:'Oreal Paris Extraordinary Oil Serum : 100 ml',
        old_Price:599,
        new_Price:499,
        discount_price:200,
        weight:'100ml (rs.2.99/ml)'

       
    },

    {
        id:4,
        image_main:'.././image/DEC130001520xx9DEC21_5_P.jpg',
        image_circle:'.././image/svgviewer-png-output (1).png',
        name:'Oreal Paris Extraordinary Oil Serum : 100 ml',
        old_Price:799,
        new_Price:399,
        discount_price:200,
        weight:'100ml (rs.2.99/ml)'

       
    },

    {
        id:5,
        image_main:'.././image/FEB120002934xx15FEB23_5_P.jpg',
        image_circle:'.././image/svgviewer-png-output (1).png',
        name:'Oreal Paris Extraordinary Oil Serum : 100 ml',
        old_Price:799,
        new_Price:599,
        discount_price:200,
        weight:'100ml (rs.2.99/ml)'

       
    },

    {
        id:6,
        image_main:'.././image/FEB130000348xx29FEB24_5_P.jpg',
        image_circle:'.././image/svgviewer-png-output (1).png',
        name:'Oreal Paris Extraordinary Oil Serum : 100 ml',
        old_Price:899,
        new_Price:699,
        discount_price:200,
        weight:'100ml (rs.2.99/ml)'

       
    },
    {
        id:7,
        image_main:'.././image/FEB130001596xx26FEB23_5_P.jpg',
        image_circle:'.././image/svgviewer-png-output (1).png',
        name:'Oreal Paris Extraordinary Oil Serum : 100 ml',
        old_Price:299,
        new_Price:199,
        discount_price:200,
        weight:'100ml (rs.2.99/ml)'

       
    },

    {
        id:8,
        image_main:'.././image/FEB130001741xx28FEB24_5_P.jpg',
        image_circle:'.././image/svgviewer-png-output (1).png',
        name:'Oreal Paris Extraordinary Oil Serum : 100 ml',
        old_Price:399,
        new_Price:299,
        discount_price:200,
        weight:'100ml (rs.2.99/ml)'

       
    },
    {
        id:9,
        image_main:'.././image/JAN120006062xx24JAN23_5_P.jpg',
        image_circle:'.././image/svgviewer-png-output (1).png',
        name:'Oreal Paris Extraordinary Oil Serum : 100 ml',
        old_Price:599,
        new_Price:299,
        discount_price:200,
        weight:'100ml (rs.2.99/ml)'

       
    },
    {
        id:10,
        image_main:'.././image/JAN150001594xx11JAN22_4_P.jpg',
        image_circle:'.././image/svgviewer-png-output (1).png',
        name:'Oreal Paris Extraordinary Oil Serum : 100 ml',
        old_Price:300,
        new_Price:200,
        discount_price:200,
        weight:'100ml (rs.2.99/ml)'

       
    },
    {
        id:11,
        image_main:'.././image/JUL120006563xx10JUL23_5_P.jpg',
        image_circle:'.././image/svgviewer-png-output (1).png',
        name:'Oreal Paris Extraordinary Oil Serum : 100 ml',
        old_Price:100,
        new_Price:80,
        discount_price:200,
        weight:'100ml (rs.2.99/ml)'

       
    },
    {
        id:12,
        image_main:'.././image/JUN120005546xx19JUN22_5_P.jpg',
        image_circle:'.././image/svgviewer-png-output (1).png',
        name:'Oreal Paris Extraordinary Oil Serum : 100 ml',
        old_Price:399,
        new_Price:299,
        discount_price:200,
        weight:'100ml (rs.2.99/ml)'

       
    }
]
let listCards=[]
function initApp(){
    products.forEach((value,key)=>{
        let newDiv=document.createElement('div')
        newDiv.classList.add('item')

        newDiv.innerHTML=`
        <div class='two_image'>
        <img src='image/image/${value.image_circle}' class='veg_image'/>

        <img src='image/image/${value.image_main}' class='main_image'/>
        </div>
        <div class='title'>${value.name}</div>
        <div class='three-div'>
        <div class='oldPrice'>
        <div>MRP</div>
        <div>&#8377;${value.old_Price.toLocaleString()}</div>
        
        </div>
        <div class='newPrice'>
        <div>MRP</div>
        <div>&#8377;${value.new_Price.toLocaleString()}</div>
        </div>

        <div class='offer'>
        <div>&#8377; ${value.discount_price}</div>
        <div>OFF</div>
        </div>
        </div>
        <p class='text-muted tax'>(Inclusive of all taxes)</p>
        <div class='weight'>${value.weight}</div>
        <button class="btn btn-success w-100 mt-3" onclick="addToCart(${key})">Add to Cart</button>
        
        
        `
        list.appendChild(newDiv)
    })
}
initApp()

function addToCart(key){
    console.log("working")
    if(listCards[key]==null){
        listCards[key]={...products[key],quantity:1}
    }
    else{
        listCards[key].quantity+=1
    }
     reloadCart()
}

 function reloadCart(){
     listCard.innerHTML=""
     let count=0;
     let totalPrice=0

     listCards.forEach((value,key)=>{
        console.log(value)
         if(value!=null){
             totalOffer=value.discount_price*value.quantity
             totalPrice+=value.new_Price*value.quantity
             count=value.quantity
             
             let newDiv=document.createElement("li")
             newDiv.innerHTML=`
             <img src='image/image/${value.image_main}'/>
             <div>${value.name}</div>
             <div>${value.new_Price*value.quantity.toLocaleString()}</div>
             <div>
             <button onclick="changeQuantity(${key},
             ${value.quantity-1})">-</button>
             <div class='count'>${value.quantity}</div>
            
            <button onclick="changeQuantity(${key},
            ${value.quantity+1})">+</button>

            </div>
            
             `
            listCard.appendChild(newDiv)
         }
     })
     total.innerHTML= '&#8377;' +totalPrice.toLocaleString()
     quantity.innerHTML=count;
     totalsaving.innerHTML= '&#8377;' +totalOffer.toLocaleString()
 }
function changeQuantity(key,quantity){
    if(quantity<=0){
        delete listCards[key]
    }
    else{
        listCards[key].quantity=quantity
    }
    reloadCart()
}

document.body.addEventListener("click", () => {
    document.documentElement.style.setProperty('--scrollbar-color', 'limegreen');
  });