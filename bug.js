var cart = [];




    function addBudget() {
        if (budget.value != "") {
            cart.push(budget.value);
            console.log(cart);
            budget.value = "";
            displayBudget()

        } else {
            alert("Fill in empty space")
        }
    
        display.innerHTML = `<h1>${budget}</h1>`;
}

// function addBudget() {
//     show.innerHTML = "";


//     // cart.map((food, index)=>{
//     //         show.innerHTML += `<h1>${index+1}. ${food}</h1>`
//     // })
    
// }