"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: 
   Date:   
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/
//The line below creates a variable with the name reportHTML. The variable is given the value of the HTML text strings surrounging the value of the raceTitle variable. 
var reportHTML = "<h1>" + raceTitle + "</h1>";
//The line below creates a for loop that will continue to repeatedly run the command block within until the value of i is equal to seven. 
for (var i = 0; i <= 7; i++) {
    //Creates a variable with the name of totalVotes that is given an initial value of 0.
    var totalVotes = 0;
    //The line below states that the values in the votes array will be added to one another and calculated. 
    votes[i].forEach(calcSum);
    //the line below states that the stings and values will be attached to the end of the rowHTML value.  
    reportHTML += "<table><caption>" + race[i] + "</caption><tr><th>Candidate</th><th>Votes</th></tr>";
    //The line below states that the 
    reportHTML += candidateRows(i, totalVotes);
    reportHTML += "</table>";
}
document.getElementById("section").innerHTML = reportHTML;

function candidateRows(raceNum, totalVotes) {
    var rowHTML = "";
    for (var j = 0; j <= 2; j++) {
        var candidateName = candidate[raceNum][j];
        var candidateParty = party[raceNum][j];
        var candidateVotes = votes[raceNum][j];
        var candidatePercent = calcPercent(candidateVotes, totalVotes);

        rowHTML += "<tr><td>" + candidateName + "(" + candidateParty + ")</td><td>" + candidateVotes.toLocaleString() + "(" + candidatePercent.toFixed(1) + ")</td>";
        for (var k = 0; k < candidatePercent; k++) {
            rowHTML += createBar(candidateParty, candidatePercent);
        }
        rowHTML += "</tr>";
    }
    return rowHTML;
}


/* Callback Function to calculate an array sum */
function calcSum(value) {
    totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
    return (100 * value / sum);
}

function createBar(partyType) {
    var barHTML = "";
    switch (partyType) {
        case "D":
            barHTML = "<td class='dem'></td>";
            break;
        case "R":
            barHTML = "<td class='rep'></td>";
            break;
        case "I":
            barHTML = "<td class='ind'></td>";
            break;
    }
    return barHTML;
}