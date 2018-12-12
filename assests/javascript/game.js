
$(document).ready(function () {
    //Entry alert
    alert("Collect the crystals!");
    //general vars including the randomized values for the crystals and winning amount
    var winningNumber = Math.floor(Math.random() * (120 - 19) + 19);
    var crystalOne = Math.floor(Math.random() * (20 - 1) + 1);
    var crystalTwo = Math.floor(Math.random() * (10 - 1) + 1);
    var crystalThree = Math.floor(Math.random() * (5 - 1) + 1);
    var crystalFour = Math.floor(Math.random() * (2 - 1) + 1);
    var total = 0;
    var wins = 0;
    var losses = 0;
    
    
    function restart() {
        //reset function that restarts the games values
        winningNumber = Math.floor(Math.random() * (120 - 19) + 19);
        crystalOne = Math.floor(Math.random() * (20 - 1) + 1);
        crystalTwo = Math.floor(Math.random() * (10 - 1) + 1);
        crystalThree = Math.floor(Math.random() * (5 - 1) + 1);
        crystalFour = Math.floor(Math.random() * (2 - 1) + 1);
        total = 0;
        alert("Another Round!")
        alert("Click another crystal gem to play!")
       
    }
    //conditional function that states what to do if you win or if you lose
    function conditions() {
    if (total === winningNumber) {
        alert("Winner!");
        //adds to the win counter
        wins++;
        //the text wont appear until you win a game
        $(".wins").html("Numbers of wins" + " " + wins)
        restart();
    }
    else if (total >= winningNumber) {
        alert("You collected too many!");
        //adds to the loss counter
        losses++;
        restart();
        //again text wont appear until you lose
        $(".losses").html("Number of losses:" + " " + losses )
    }
    }
    //individual crystal clicks that change the total value
    //wondering if there is a way to consolidate this area, as alot of the code is repeating
    $("#crystal1").on("click", function () {
        $(".guesses").html("Number to guess:" + " " + winningNumber);
        //the total value changes based on the value of the crystal clicks
        total = crystalOne + total;
        $(".total").html("Current total amount:" + " " + total);
        //run the conditional checking if you win or not
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