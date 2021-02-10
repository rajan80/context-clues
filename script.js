document.addEventListener("DOMContentLoaded", function () {


    var accusation = 1;
    for (var i = 1; i < 101; i++) {
        var h3 = document.createElement("h3");
        h3.innerText = "accusation" + [i];
        document.body.appendChild(h3);
        var index = addIndex(i);
        h3.addEventListener("click", index);
    }

    var friend_Name = ["Ken", "Sam", "Josh", "Jake", "Drake"];
    var location_Name = ["France", "Germany", "Hoover", "birmingham", "Jasper", "Atlanta", "Baltimore", "Colorado", "Denver", "East Coast"];
    var weapon_Name = ["Knife", "Gun", "Hammer", "pen", "computer", "desk", "Boat", "Rifel", "Bomb", "Snipergit ", "F", "G", "H", "I", "J", "A", "B", "C", "D", "E"];
    
    function addIndex(index) {
        return function () {
            alert (`Accusation ${index}: I accuse ${friend_Name[index % 5]}, with the ${weapon_Name[index % 10]} in the ${location_Name[index % 20]}!`)
        }
    }
})





















