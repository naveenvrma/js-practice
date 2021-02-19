let finalDeckId = ''
let shuffleCards = () => {
    let response = new XMLHttpRequest;
    response.open('GET', 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1', true);
    response.send();
    console.log(response);
    response.onreadystatechange = function() {
        if(this.readyState == 4){
            let parsedData = JSON.parse(this.responseText);
            let deckId = parsedData['deck_id'];
            finalDeckId = deckId;
            document.getElementById('display').innerText = deckId
            document.getElementById('draw').className = ''
        }
    }
}

let drawCard = () => {
    let drawResponse = new XMLHttpRequest;
    drawResponse.open('GET', `https://deckofcardsapi.com/api/deck/${finalDeckId}/draw/?count=2`, true);
    drawResponse.send();
    console.log(drawResponse);
    drawResponse.onreadystatechange = function() {
        if(this.readyState == 4){
           getCard(this.responseText) 
        }
    }
}

let getCard = (responseData) => {
    let parsedData = JSON.parse(responseData);
    // console.log(parsedData)
    let cards = parsedData['cards'];
    console.log(cards);
    document.getElementById('images').innerHTML = '';
    for(let i=0; i<cards.length; i++){
        let cardImg = cards[i]['image'];
        let imageEl = document.createElement('img');
        imageEl.src = cardImg;
        document.getElementById('images').append(imageEl) 
    }
    
}

