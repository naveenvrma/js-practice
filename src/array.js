let userNames = [];

function addName() {

    let nameEntered = document.getElementById("enter-name").value
    if( userNames.indexOf(nameEntered) === -1) {
        userNames.push(nameEntered);
        showArray();
    }
    document.getElementById("enter-name").value = '';
}

function showArray(){
    document.getElementById("display").innerText = userNames;
    document.getElementById("error").className = 'hide';
}

function removeName(){
    let removeEntered = document.getElementById("remove-name").value
    let removeEnteredIndex = userNames.indexOf(removeEntered)
    if(removeEnteredIndex !== -1){
        userNames.splice(removeEnteredIndex, 1);
        showArray()
    }
    else{
        document.getElementById("bold").innerText = removeEntered;
        document.getElementById("error").className = '';
    }
    document.getElementById("remove-name").value = '';
}

