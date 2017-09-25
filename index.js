var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
  return cart
}

function addToCart(itemName) {
  var random = Math.random() * (100 - 1) + 1
  var itemPrice = Math.floor(random)

  var object ={[itemName]:itemPrice}

  console.log(itemName + ' has been added to your cart.')

  cart.push(object)

  return cart
}

function viewCart() {
  if (cart.length===0) {
    console.log('Your shopping cart is empty.')
  } else if (cart.length===1){
    console.log('In your cart, you have ' + Object.keys(cart[0]) + ' at $'+ cart[0][Object.keys(cart[0])] + '.')
  }

  else if(cart.length===2){
    console.log('In your cart, you have ' + Object.keys(cart[0]) + ' at $'+ cart[0][Object.keys(cart[0])] + ' and ' + Object.keys(cart[1]) + ' at $'+ cart[1][Object.keys(cart[1])] + '.')
  } else {
    var count=cart.length-1
    var print =[]
    for (var i = 0; i < count; i++) {
      print.push(" "+Object.keys(cart[i]) + ' at $'+ cart[i][Object.keys(cart[i])])
    }
    console.log('In your cart, you have' + print + ', and ' + Object.keys(cart[i]) + ' at $'+ cart[i][Object.keys(cart[i])] + '.')
  }

  }

function total() {
  // write your code here
  var total=0
  for (var i = 0; i < cart.length; i++) {
    total=total+cart[i][Object.keys(cart[i])]
  }
  return total
}

// function removeFromCart(item) {
//   for (var i = 0; i < cart.length; i++) {
//     if ((cart[i]).hasOwnProperty(item)) {
//       cart.splice(i, 1)
//       return cart
//     }
//   }
//
//   var count =0
//     for (var i = 0; i < cart.length; i++) {
//       if (!(cart[i]).hasOwnProperty(item)) {
//         count++
//       }
// }
//       if (count===cart.length) {
//         console.log('That item is not in your cart.')
//       }
// }

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart
    }
  }
  console.log(`That item is not in your cart.`)
  return cart
}


function placeOrder(cardNumber) {
  // write your code here
}
