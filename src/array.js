let userName = [];

function addName() {

    let nameEntered = document.getElementById("aName").value
    if( userName.indexOf(nameEntered) === -1) {
        userName.push(nameEntered);
        showArray();
        console.log('before adding' ,userName);
    }
}

function showArray(){
    document.getElementById("display").innerText = userName;
}

function removeName(){
    let removeEntered = document.getElementById("rName").value
    let removeEnteredIndex = userName.indexOf(removeEntered)
    if(removeEnteredIndex !== -1){
        userName.splice(removeEnteredIndex, 1);
        showArray()
    }
    else{
        document.getElementById("err").innerText = "Entered Name Does not Exit"
    }

    console.log('aftr removing' ,userName);
    document.getElementById("rName").value = '';
}

/**
 * TODO
 * show error message instead of alert
 */