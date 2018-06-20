/*
    This is your main stylesheet, you should use it only
    to include other styles into your web app.
*/
//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
//include your own styles
import '../style/index.scss';

window.onload = function(){
    window.genCard = function(){
  
        var value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        var suit = ["Diamonds", "Spades", "Hearts", "Clubs"];
        var randomCardNumber = Math.floor(Math.random() * value.length);
        var randomSuitNumber = Math.floor(Math.random() * suit.length);
        var finalSuit = suit[randomSuitNumber];
        
        document.getElementById('cardContent').innerHTML = value[randomCardNumber];
        document.getElementById('theCard').className = "";
        document.getElementById('theCard').classList.add("card");
        document.getElementById('theCard').classList.add(getSuiteClass(finalSuit));
    };
    
    document.getElementById("mybutton").onclick = window.genCard;
    window.genCard();
    document.querySelector("#settingListener").addEventListener('click', window.genCard);

};

    

function getSuiteClass(suit)
{
    switch (suit) {
        case "Diamonds": return "suit-diamonds"; break;
        case "Spades": return "suit-spades"; break;
        case "Hearts": return "suit-hearts"; break;
        case "Clubs": return "suit-clubs"; break;
    }
}