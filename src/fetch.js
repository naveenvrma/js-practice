let deckId = ""
let fetchData = () => {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then((response) => {
        let data = response.json()
        return data;
    })
    .then((deckData) => {
        deckId = deckData['deck_id']
    })   
}
fetchData()

let fetchImage = () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then((response) => {
        let imageData = response.json()
        return imageData;
    })
    .then((imageData) => {
        document.getElementById('images').innerHTML = ''
        let imageObj = imageData['cards'];
        imageObj.map((card) => {
            let image = card['image'];
            let imageEl = document.createElement('img');
            imageEl.src = image;
            document.getElementById('images').append(imageEl);
        })
        let success = imageData['success'];
        if(!success){
            throw new Error('The deck is now empty. Please press OK to refresh the page to continue');
        }
        /**
         * to refresh the deck when remaining cards are 0
         */
        // let remaining = imageData['remaining']; 
        // if(remaining === 0){
        //     fetchData()
        // }
    })
    .catch((error) => {
        let refresh = confirm(error)
        if(refresh){
            window.location.reload()
        }
    })
}


