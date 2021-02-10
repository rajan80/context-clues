document.addEventListener("DOMContentLoaded", function () {


    var accusation = 1;
    for (var i = 1; i < 101; i++) {
        var h3 = document.createElement("h3");
        h3.textContent = "accusation" + [i];
        document.body.appendChild(h3);
        h3.addEventListener("click", function () {
            alert(cal(i));
        });
    }

    var friend_Name = ["A", "B", "C", "D", "E"];
    var location_Name = ["F", "G", "H", "I", "J", "A", "B", "C", "D", "E"];
    var weapon_Name = ["F", "G", "H", "I", "J", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "A", "B", "C", "D", "E"];
    function cal(i) {

       alert (`Accusation ${i}: I accuse ${friend_Name}, with the ${weapon_Name} in the ${location_Name}!`)
    }


})





















