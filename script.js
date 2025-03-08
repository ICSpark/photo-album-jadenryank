function fix() {
    let element = document.getElementById("coconut");
    element.remove();
   
    element = document.getElementById("coast.jpg");
    coast.remove();
    
    element = document.getElementById("watermelon.jpg");
    watermelon.remove();

    element = document.getElementById("sunflowers.jpg");
    sunflowers.remove();

    let tree = document.createElement("img");
    tree.id = "tree";
    tree.src = "to-add/christmasTree.jpg";
    let photos = document.getElementById("photos");
    photos.appendChild(tree);

    let snowmen = document.createElement("img");
    snowmen.id = "snowmen";
    snowmen.src = "to-add/snowmen.jpg";
    photos = document.getElementById("photos");
    photos.appendChild(snowmen);

    let stockings = document.createElement("img");
    stockings.id = "stockings";
    stockings.src = "to-add/stockings.jpg";
    photos = document.getElementById("photos");
    photos.appendChild(stockings);


}