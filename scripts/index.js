

// let item=
// {
//   item_image:'images/1.jpg',
//   rating:
//   {
//     star:4.5,
//     noOfReviews:1400,
//   },
//   company_name:'Carlton landon',
//   item_name:'Rhodium-plated CZ Floral',
//   current_price:606,
//   original_price:1045,
//   dicount_percentage:42,
// }
// itemsContainerElement.innerHTML=`
// <div class="item-container">
// <img src="${item.item_image}" class="item-image" alt="item image">
// <div class="rating"> ${item.rating.star}⭐ | ${item.rating.noOfReviews} k</div>
// <div class="company-name">${item.company_name}</div>
// <div class="item-name">${item.item_name}</div>
// <div class="price">
//     <span class="current-price">Rs ${items.current_price}</span>
//     <span class="original-price">Rs ${items.original_price}</span>
//     <span class="discount">(${items.dicount_percentage}% off)</span>
// </div>
// <button class="btn-add-bag">Add to Bag</button>
// </div>`;


let bagItems;
onLoad();

function onLoad(){
  let bagItemsStr=localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) :[];
displayItemsOnHomePage();
displayBagIcon();
}
function addToBag(itemId)
{
  bagItems.push(itemId);
  //we cant store array in db 
  // when we click on 1 id item 
  // key bagItems value [1] 
  //when we click on 4 id item 
   // key bagItems value [1 ,4] 
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
  displayBagIcon();
  console.log(bagItems);
}

function displayBagIcon()
{
  let bagItemCountElement= document.querySelector('.bag-item-count');
  if(bagItems.length>0)
  {
    bagItemCountElement.style.visibility='visible';
    bagItemCountElement.innerText=bagItems.length;
  }
  else
  {
    bagItemCountElement.style.visibility='hidden';
  }
  

}


function displayItemsOnHomePage()
{
let itemsContainerElement = document.querySelector('.items-container');
if(!itemsContainerElement)
{
  return;
}
let innerHTML='';
items.forEach(item=>{
  innerHTML+=
  `<div class="item-container">
  <img src="${item.image}" class="item-image" alt="item image">
  <div class="rating"> ${item.rating.stars}⭐ | ${item.rating.count} k</div>
  <div class="company-name">${item.company}</div>
  <div class="item-name">${item.item_name}</div>
  <div class="price">
      <span class="current-price">Rs ${item.current_price}</span>
      <span class="original-price">Rs ${item.original_price}</span>
      <span class="discount">(${item.discount_percentage}% off)</span>
  </div>
  <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
  </div>`

});
itemsContainerElement.innerHTML=innerHTML;
}