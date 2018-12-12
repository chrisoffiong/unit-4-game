
$(document).ready(function () {
    alert("Collect the crystals!");
    
    var winningNumber = Math.floor(Math.random() * (120 - 19) + 19);
    var crystalOne = Math.floor(Math.random() * (20 - 1) + 1);
    var crystalTwo = Math.floor(Math.random() * (10 - 1) + 1);
    var crystalThree = Math.floor(Math.random() * (5 - 1) + 1);
    var crystalFour = Math.floor(Math.random() * (2 - 1) + 1);
    var total = 0;
    var wins = 0;
    var losses = 0;
    
    
    function restart() {
        winningNumber = Math.floor(Math.random() * (120 - 19) + 19);
        crystalOne = Math.floor(Math.random() * (20 - 1) + 1);
        crystalTwo = Math.floor(Math.random() * (10 - 1) + 1);
        crystalThree = Math.floor(Math.random() * (5 - 1) + 1);
        crystalFour = Math.floor(Math.random() * (2 - 1) + 1);
        total = 0;
        alert("Another Round!")
        alert("Click another crystal gem to play!")
       
    }

    function conditions() {
    if (total === winningNumber) {
        alert("Winner!");
        wins++;
        $(".wins").html("Numbers of wins" + " " + wins)
        restart();
    }
    else if (total >= winningNumber) {
        alert("You collected too many!");
        losses++;
        restart();
        $(".losses").html("Number of losses:" + " " + losses )
    }
    }
    $("#crystal1").on("click", function () {
        $(".guesses").html("Number to guess:" + " " + winningNumber);
        total = crystalOne + total;
        $(".total").html("Current total amount:" + " " + total);
        conditions();
        
    })


    $("#crystal2").on("click", function () {
        $(".guesses").html("Number to guess:" + " " + winningNumber);
        total = crystalTwo + total;
        $(".total").html("Current total amount:" + " " + total);
        conditions();
        
    })


    $("#crystal3").on("click", function () {
        $(".guesses").html("Number to guess:" + " " + winningNumber);
        total = crystalThree + total;
        $(".total").html("Current total amount:" + " " + total);
        conditions();
    })


    $("#crystal4").on("click", function () {
        $(".guesses").html("Number to guess:" + " " + winningNumber);
        total = crystalFour + total;
        $(".total").html("Current total amount:" + " " + total);
        conditions();
    })
})