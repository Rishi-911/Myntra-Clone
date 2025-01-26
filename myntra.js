let itemsContainer = document.querySelector(".item-containers");
const items = [
    {
        id: '001',
        image: '1.jpg',
        company: 'Carlton London',
        item_name: 'Rhodium-Plated CZ Floral Studs',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        },
    },
    {
        id: '002',
        image: '2.jpg',
        company: 'CUKOO',
        item_name: 'Women Padded Halter Neck Swimming Dress',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.3,
            count: 24,
        },
    },
    {
        id: '003',
        image: '3.jpg',
        company: 'NUEVOSDAMAS',
        item_name: 'Women Red & White Printed A-Line Knee-Length Skirts',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '004',
        image: '4.jpg',
        company: 'ADIDAS',
        item_name: 'Indian Cricket ODI Jersey',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '005',
        image: '5.jpg',
        company: 'Roadster',
        item_name: 'Pure Cotton T-shirt',
        original_price: 1399,
        current_price: 489,
        discount_percentage: 65,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 3500,
        },
    },
    {
        id: '006',
        image: '6.jpg',
        company: 'Nike',
        item_name: 'Men ReactX Running Shoes',
        original_price: 14995,
        current_price: 14995,
        discount_percentage: 0,
    
        rating: {
            stars: 0.0,
            count: 0,
        },
    },
    {
        id: '007',
        image: '7.jpg',
        company: 'The Indian Garage Co',
        item_name: 'Men Slim Fit Regular Shorts',
        original_price: 1599,
        current_price: 639,
        discount_percentage: 60,
        rating: {
            stars: 4.2,
            count: 388,
        },
    },
    {
        id: '008',
        image: '8.jpg',
        company: 'Nivea',
        item_name: 'Men Fresh Deodrant 150ml',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        rating: {
            stars: 4.2,
            count: 5200,
        },
    }
];



function displayHomePage(){
    if(!itemsContainer){
        return;
    }
    let innerHTML ='';
items.forEach(item =>{
   innerHTML += `<div class="item-container">
            <img class="image" src=" ${item.image}"alt="">
            <div class="rating">
               ${item.rating.stars}⭐ | ${item.rating.count}
            </div>
            <div class="company-name">
                ${item.company}
            </div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price"><del>Rs ${item.original_price}</del></span>
                <span class="discount">(${item.discount_percentage}% off)</span>
            </div>
            <button class="btn" onClick = "added(${item.id})">Add To Bag</button>
        </div>`
})
itemsContainer.innerHTML = innerHTML;
}
let BagItems = [];
onLoad();

function onLoad(){
    displayHomePage();
    let  BagItemsStr = localStorage.getItem('BagItems')
    BagItems = BagItemsStr ? JSON.parse(BagItemsStr) : [];
    displayBagIcon();
}

function added (itemId){
    BagItems.push(itemId);
    localStorage.setItem('BagItems', JSON.stringify(BagItems));
    displayBagIcon();
}
function displayBagIcon(){
    let bag_count = document.querySelector('.bg-count')
    if(BagItems.length > 0){
        bag_count.style.visibility = 'visible';
    bag_count.innerText = BagItems.length;
    }
    else{
        bag_count.style.visibility = 'hidden';
    }
}
    


