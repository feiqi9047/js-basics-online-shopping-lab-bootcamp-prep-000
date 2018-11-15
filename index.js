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
  if(!cart.length) {
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