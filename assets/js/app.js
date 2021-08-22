const coupon = 'stevekaku';


// memory section button handler
document.getElementById('8-gb-btn').addEventListener('click', function () {
    // setting extra memory price and calculate total
    const memoryPrice = document.getElementById('memory');
    memoryPrice.innerText = 0;
    totalCalculation(['best-price', 'memory', 'storage', 'delivery'])
})
document.getElementById('16-gb-btn').addEventListener('click', function () {
    // setting extra memory price and calculate total
    const memoryPrice = document.getElementById('memory');
    memoryPrice.innerText = 180;
    totalCalculation(['best-price', 'memory', 'storage', 'delivery'])
})

// Storage section button handler
document.getElementById('256-gb-btn').addEventListener('click', function () {
    // setting extra storage price and calculate total 
    const storagePrice = document.getElementById('storage');
    storagePrice.innerText = 0;
    totalCalculation(['best-price', 'memory', 'storage', 'delivery'])
})
document.getElementById('512-gb-btn').addEventListener('click', function () {
    // setting extra storage price and calculate total 
    const storagePrice = document.getElementById('storage');
    storagePrice.innerText = 100;
    totalCalculation(['best-price', 'memory', 'storage', 'delivery'])
})
document.getElementById('1-tb-btn').addEventListener('click', function () {
    // setting extra storage price and calculate total 
    const storagePrice = document.getElementById('storage');
    storagePrice.innerText = 180;
    totalCalculation(['best-price', 'memory', 'storage', 'delivery'])
})

// Delivery Option button handler
document.getElementById('free-delivery').addEventListener('click', function () {
    // setting Delivery charge and calculate total 
    const deliveryCharge = document.getElementById('delivery');
    deliveryCharge.innerText = 0;
    totalCalculation(['best-price', 'memory', 'storage', 'delivery'])
})
document.getElementById('paid-delivery').addEventListener('click', function () {
    // setting Delivery charge and calculate total 
    const deliveryCharge = document.getElementById('delivery');
    deliveryCharge.innerText = 20;
    totalCalculation(['best-price', 'memory', 'storage', 'delivery'])
})

// Apply promo code button handler
document.getElementById('promo-apply-btn').addEventListener('click', function () {
    applyPromo()
})

function totalCalculation(arguments) {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        // getting all the required fields to be calculated from the arguments
        const fieldAmount = parseInt(document.getElementById(arguments[i]).innerText);
        total += fieldAmount;
    }
    document.getElementById('total-price').innerText = total;
    document.getElementById('grand-total-price').innerText = total;
}

function applyPromo() {
    const promoField = document.getElementById('promo-code');
    const promoFieldValue = promoField.value;
    const totalPrice = parseFloat(document.getElementById('total-price').innerText);
    const grandTotal = document.getElementById('grand-total-price');
    if (promoFieldValue.toLowerCase() == coupon.toLowerCase()) {
        // 20% discount
        const discountPrice = totalPrice * 0.2;
        grandTotal.innerText = parseFloat(grandTotal.innerText) - discountPrice;
    }
    promoField.value = '';
}

