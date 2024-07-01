var x = [];
var y = [];
var isNewItemsAdded = false; // Flag to track if items have been added

function addnew() {
    var element = document.getElementById("container");
    element.style.display = "grid";
    
    // Add "Item Name" and "Item Price" headers if not added already
    if (!isNewItemsAdded) {
        var itemNameHeader = document.createElement("div");
        itemNameHeader.textContent = "Item Name";
        element.appendChild(itemNameHeader);
        
        var itemPriceHeader = document.createElement("div");
        itemPriceHeader.textContent = "Item Price";
        element.appendChild(itemPriceHeader);
        
        // Add items and prices
        for (var i = 0; i < x.length; i++) {
            var newItemName = document.createElement("div");
            newItemName.textContent = x[i];
            element.appendChild(newItemName);
            
            var newItemPrice = document.createElement("div");
            newItemPrice.textContent = y[i];
            element.appendChild(newItemPrice);
        }
        
        isNewItemsAdded = true; // Update flag to indicate items have been added
    }
    
    // Add "Total" and its value
    var totalHeader = document.createElement("div");
    totalHeader.textContent = "Total";
    element.appendChild(totalHeader);
    
    var totalValue = document.createElement("div");
    totalValue.textContent = addall();
    element.appendChild(totalValue);
}

function addall() {
    var s = 0;
    for (var i = 0; i < y.length; i++) {
        s = s + y[i];
    }
    return s;
}

function storevalue(name, price) {

    x.push(name);
    y.push(price);	
}
