//apple object
var apple = {
    name: "apple",
    healthPoints: 20,
    attackPower: 10,
    counterAttackPower: 20,
    image: "assets/images/apple.jpg",
}
//orange object
var orange = {
    name: "orange",
    healthPoints: 30,
    attackPower: 20,
    counterAttackPower: 30,
    image: "assets/images/orange.jpg",
}
//lemon object
var lemon = {
    name: "lemon",
    healthPoints: 10,
    attackPower: 50,
    counterAttackPower: 10,
    image: "assets/images/lemon.jpg",
}
//banana object
var banana = {
    name: "banana",
    healthPoints: 20,
    attackPower: 50,
    counterAttackPower: 20,
    image: "assets/images/banana.jpg",
}
var availableFruits = [apple, orange, lemon, banana];

var enemyFruits = [];

//variables to store and update character stats
var myCharAP;
var myCharHP;
var myCharCAP;

//variables to store and 
var defenderAP;
var defenderHP;
var defenderCAP;

//render all fruits to the fruitselection div
for (i = 0; i < availableFruits.length; i++) {
    var currentFruit = availableFruits[i];
    var newFruit = $("<div>").addClass("col-2 FruitClass selectableFruit").attr("id", currentFruit.name).attr("data-ap", currentFruit.attackPower).attr("data-hp", currentFruit.healthPoints).attr("data-cap", currentFruit.counterAttackPower);
    $("#collectionOfFruits").append(newFruit);
    var newFruitLabel = $("<div>").addClass("fruitLabel").text(currentFruit.name);
    var newFruitImage = $("<img>").attr("src", currentFruit.image);
    var newFruitInfo = $("<div>").text("Health Points: " + currentFruit.healthPoints + " Attack Power: " + currentFruit.attackPower);
    newFruit.append(newFruitLabel);
    newFruit.append(newFruitImage);
    newFruit.append(newFruitInfo);
}
//on click function - selects character - append to your character div
$(".selectableFruit").click(function () {
    $("#myFruit").append($(this));
    myCharAP = $(this).attr("data-ap");
    myCharHP = $(this).attr("data-hp");
    myCharCAP = $(this).attr("data-cap");
    $(this).addClass("selectedCharacter");
    $(this).removeClass("selectableFruit");
    //move all other fruits to the enemies div
    $("#enemyFruits").append($(".selectableFruit").not(this));
    $(".selectableFruit").not(this).addClass("enemy");
    $(".selectableFruit").not(this).removeClass("selectableFruit");
});
$(document).on('click', '.enemy', function () {
    $("#defenderArea").append($(this));
    $(this).addClass("currentdefender");
    defenderAP = $(this).attr("data-ap");
    defenderHP = $(this).attr("data-hp");
    defenderCAP = $(this).attr("data-cap");
});

$("#attackbutton").on.click(function () {

});