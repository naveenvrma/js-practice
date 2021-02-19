let foodDishes = () => {
    let request = new XMLHttpRequest;
    request.open('GET', 'https://api.adviceslip.com/advice', true);
    request.send();
    request.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText)
            showData(this.responseText);
        }
    }
        
}  

let showData = (responseData) => {
    let parsedData = JSON.parse(responseData);
    console.log(parsedData);
    let responseObject = parsedData['slip'];
    console.log(responseObject)
    document.getElementById('display').innerText = responseObject['advice'];
    
}


// let showData = (responseData) => {
   
//     let advice = [];
//     console.log(advice)
//     let parsedData = JSON.parse(responseData);
//     for(let i=0; i<parsedData.length; i++){
//         let elementIndex = parsedData[i];
//         advice.push(elementIndex['']);
//         document.getElementById('display').innerText = advice

//     }
    	    

// }