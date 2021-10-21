const title = document.getElementById("title");
const name = document.getElementById("name");
const address1 = document.getElementById("address1");
const address2 = document.getElementById("address2");
const address3 = document.getElementById("address3");
const address4 = document.getElementById("address4");
const postCode = document.getElementById("postCode");
const emailAddress = document.getElementById("emailAddress");
const show = document.getElementById("shows");
const showPrice = document.getElementById("showPrice");
const seats = document.getElementById("seats");
const deliveryCost = document.getElementById("deliveryCost");
const btnBook = document.getElementById("bookBtn");
const summary = document.getElementById("output");
const delivery = document.querySelectorAll("input[name='delivery']");
const delEticket = document.getElementById("email");
const delPost = document.getElementById("post");
const delBox = document.getElementById("boxOffice");

const ticketPrice = 0.00;
const deliveryPrice = 0.00;
const eticketCost = 0.00;
const postCost = 3.99;
const boxCost = 1.50;
const blank = document.getElementById("blank");
const phantom = document.getElementById("phantom");
const hamilton = document.getElementById("hamilton");
const lion = document.getElementById("lion");
const saigon = document.getElementById("saigon");
const phantomPrice = 79.00;
const hamiltonPrice = 85.00;
const lionPrice = 67.00;
const saigonPrice = 83.00;




delEticket.addEventListener("click", changeDelivery);
delPost.addEventListener("click", changeDelivery);
delBox.addEventListener("click", changeDelivery);
show.addEventListener("change", displayShowprice);
btnBook.addEventListener("click", book);

seats.value = 0;
showPrice.innerText = `-`;
deliveryCost.innerText = deliveryPrice.toFixed(2);

if (showPrice.innerText = "-"){
    document.getElementById("bookBtn").disabled = true;
}

function changeDelivery (){ 
   if (delEticket.checked) {
        deliveryCost.innerText = eticketCost.toFixed(2);
    }
    else if (delPost.checked){
        deliveryCost.innerText = postCost.toFixed(2);
    }
    else if (delBox.checked){
        deliveryCost.innerText = boxCost.toFixed(2);
    }
}


function displayShowprice(){

    if (phantom.selected){
        showPrice.innerText = phantomPrice.toFixed(2);
        document.getElementById("bookBtn").disabled = false;
    }

    else if (hamilton.selected){
        showPrice.innerText = hamiltonPrice.toFixed(2);
        document.getElementById("bookBtn").disabled = false;
    }

    else if (lion.selected){
        showPrice.innerText = lionPrice.toFixed(2);
        document.getElementById("bookBtn").disabled = false;
    }

    else if (saigon.selected){
        showPrice.innerText = saigonPrice.toFixed(2);
        document.getElementById("bookBtn").disabled = false;
    }
    else{
        showPrice.innerText = `-`;
        document.getElementById("bookBtn").disabled = true;
    }
}


function book(){

    if (seats.value <=0){
        summary.innerText = "Ticket Number Required";
    }
    else if (seats.value >0 && seats.value <2){
        let titleDisplay = title.options[title.selectedIndex].innerText;
        let showShow = show.options[show.selectedIndex].innerText;
        let deliveryDelivery = document.querySelector("input[name='delivery']:checked");
        let totalPrice = showPrice.innerText * seats.value;
        let deliveryNumber = parseFloat(deliveryCost.innerText);
        let finalCost = totalPrice + deliveryNumber;
    
    
        summary.innerText = `Name:
        ${titleDisplay} ${name.value}
    
        Address:
        ${address1.value}
        ${address2.value}
        ${address3.value}
        ${address4.value}
        ${postCode.value}
    
        Email Address: 
        ${emailAddress.value}
    
        Your Order:
        ${seats.value} ticket for ${showShow} at £${showPrice.innerText} per ticket
        Total Ticket Cost : £${totalPrice.toFixed(2)}
    
        Ticket Collection Via ${deliveryDelivery.value}: £${deliveryCost.innerText}
    
        Final Cost: £${finalCost.toFixed(2)}`
        }
    else if (seats.value >=6 && seats.value <=9){
    let titleDisplay = title.options[title.selectedIndex].innerText;
    let showShow = show.options[show.selectedIndex].innerText;
    let deliveryDelivery = document.querySelector("input[name='delivery']:checked");
    let totalPrice = showPrice.innerText * seats.value;
    let deliveryNumber = parseFloat(deliveryCost.innerText);
    let finalCost = totalPrice + deliveryNumber;
    let discount = totalPrice / 100 * 10;
    let discountedTotal = finalCost - discount;


    summary.innerText = `Name:
    ${titleDisplay} ${name.value}

    Address:
    ${address1.value}
    ${address2.value}
    ${address3.value}
    ${address4.value}
    ${postCode.value}

    Email Address: 
    ${emailAddress.value}

    Your Order:
    ${seats.value} tickets for ${showShow} at £${showPrice.innerText} per ticket
    Total Ticket Cost : £${totalPrice.toFixed(2)}
    10% Discount applied at: £${discount.toFixed(2)}

    Ticket Collection Via ${deliveryDelivery.value}: £${deliveryCost.innerText}

    Final Cost: £${discountedTotal.toFixed(2)}`
    }

    else if (seats.value >=10){
        let titleDisplay = title.options[title.selectedIndex].innerText;
        let showShow = show.options[show.selectedIndex].innerText;
        let deliveryDelivery = document.querySelector("input[name='delivery']:checked");
        let totalPrice = showPrice.innerText * seats.value;
        let deliveryNumber = parseFloat(deliveryCost.innerText);
        let finalCost = totalPrice + deliveryNumber;
        let discount = totalPrice / 100 * 15;
        let discountedTotal = finalCost - discount;
    
    
        summary.innerText = `Name:
        ${titleDisplay} ${name.value}
    
        Address:
        ${address1.value}
        ${address2.value}
        ${address3.value}
        ${address4.value}
        ${postCode.value}
    
        Email Address: 
        ${emailAddress.value}
    
        Your Order:
        ${seats.value} tickets for ${showShow} at £${showPrice.innerText} per ticket
        Total Ticket Cost : £${totalPrice.toFixed(2)}
        15% Discount applied at: £${discount.toFixed(2)}
    
        Ticket Collection Via ${deliveryDelivery.value}: £${deliveryCost.innerText}
    
        Final Cost: £${discountedTotal.toFixed(2)}`
        }
        
    else {
        let titleDisplay = title.options[title.selectedIndex].innerText;
        let showShow = show.options[show.selectedIndex].innerText;
        let deliveryDelivery = document.querySelector("input[name='delivery']:checked");
        let totalPrice = showPrice.innerText * seats.value;
        let deliveryNumber = parseFloat(deliveryCost.innerText);
        let finalCost = totalPrice + deliveryNumber;
    
    
        summary.innerText = `Name:
        ${titleDisplay} ${name.value}
    
        Address:
        ${address1.value}
        ${address2.value}
        ${address3.value}
        ${address4.value}
        ${postCode.value}
    
        Email Address: 
        ${emailAddress.value}
    
        Your Order:
        ${seats.value} tickets for ${showShow} at £${showPrice.innerText} per ticket
        Total Ticket Cost : £${totalPrice.toFixed(2)}
    
        Ticket Collection Via ${deliveryDelivery.value}: £${deliveryCost.innerText}
    
        Final Cost: £${finalCost.toFixed(2)}`
        }
}
