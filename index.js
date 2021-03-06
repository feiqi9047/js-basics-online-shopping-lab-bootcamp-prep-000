var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var item_object={itemName: item, itemPrice: Math.floor(1+100*Math.random())}
 cart.push(item_object);
 return `${item} has been added to your cart.`
}

function viewCart() {
  var items=[]
  if(cart.length===0) {
    return "Your shopping cart is empty."
  }
  if(cart.length>=3) {
    for(let i=0;i<cart.length-1;i++) {
      items.push(cart[i]['itemName']+" at $"+cart[i]['itemPrice']);
    }
    return `In your cart, you have ${items.join(', ')}, and ${cart[cart.length-1]['itemName']} at $${cart[cart.length-1]['itemPrice']}.`
  }
  else if(cart.length==2) {
    for(let i=0;i<cart.length;i++) {
      items.push(cart[i]['itemName']+" at $"+cart[i]['itemPrice']);
    }
    return `In your cart, you have ${items[0]}, and ${items[1]}.`
  }
  else {
    return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`
  }
}


function total() {
  var total=0;
  for(let i=0;i<cart.length;i++) {
    total+=cart[i]['itemPrice'];
  }
  return total;
 }	
 
 function removeFromCart(item) {
  for(let i=0;i<cart.length;i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart."
 }	
 
 function placeOrder(cardNumber) {
  if(!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    let order = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart=[];
    return order
  }
 }