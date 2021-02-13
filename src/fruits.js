let fruitsPrice = {
    'mango' : 2,
    'orange' : 4,
    'apple' : 3,
    'banana' : 1
}



function bill() {
    let fruitsArray = Object.keys(fruitsPrice)
    let total = 0;
    for(i=0; i<fruitsArray.length; i++){
        let fruit = fruitsArray[i]
        let quantity = document.getElementById(fruit).value;
        total = total + totalFruitsCost(fruitsPrice[fruit], quantity)
    }
    document.getElementById("bold").innerText = total;


// Monica's view

    // let totalCost = 0;
    // for(let fruit in fruitsPrice) {
    //     console.log(fruit, fruitsPrice[fruit])
    //     let quantity = document.getElementById(fruit).value;
    //     console.log(quantity)
    //     totalCost += totalFruitsCost(fruitsPrice[fruit], quantity)
    // }
    // document.getElementById("bold").innerText = totalCost;
}

// my first modification

// function calculateTotal() {
//     let mangoesQuantity = document.getElementById("mango").value;
//     let orangesQuantity = document.getElementById("orange").value;
//     let applesQuantity = document.getElementById("apple").value;
//     let bananasQuantity = document.getElementById("banana").value;

//     let finalMangoes = totalFruitsCost(fruitsPrice.mango,mangoesQuantity);
//     console.log('finalMangoes', finalMangoes)
//     let finalOranges = totalFruitsCost(fruitsPrice.orange,orangesQuantity);
//     console.log('finalOranges', finalOranges)
//     let finalApples = totalFruitsCost(fruitsPrice.apple,applesQuantity);
//     console.log('finalApples', finalApples)
//     let finalBananas = totalFruitsCost(fruitsPrice.banana,bananasQuantity);
//     console.log(finalBananas)
//     let total = finalMangoes+finalOranges+finalApples+finalBananas;

//     document.getElementById("bold").innerText = total;

// }

function totalFruitsCost(fruitsCost,fruitsQuantity) {
    return parseInt(fruitsCost)*parseInt(fruitsQuantity);
}







