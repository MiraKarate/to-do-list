//1. The user can add a new item to a list of items:
function newItem () {

    let li = $('<li></li>'); //stores each <li> element in a variable
    let inputValue = $('#input').val(); //store the value into a variable you can use
    li.append(inputValue);// append this value into another element such as the li 

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        let list = $('#list');//assign the selected list to a variable
        list.append(li); // append the li variable to the “list” variable
    }

    //2. The user can cross out an item from the list of items:
    function crossOut() {
		li.toggleClass("strike");
	}

    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

    //3 The user can delete an item from the list of items
    // Adding the delete button "X": 
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

    //Adding when click CLASS DELETE (DISPLAY: NONE) from the css:
    crossOutButton.on("click", deleteListItem);

    function deleteListItem () {
        li.addClass("delete");
    }
    // 4. The user can change the order of items in the list of items:
    $('#list').sortable();
}
    
