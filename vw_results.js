"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Maria De Jesus Rizo
   Date:   3.1.19
   
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
    //The line below states that the the value of the fuction candidateRows will be attached to the end of the value reportHTML with the vale of i and total votes as its parameters. 
    reportHTML += candidateRows(i, totalVotes);
    reportHTML += "</table>";
}
//The line below states that the value of reportHTML will be inserted within the HTML document. The value of the variable will be placed within the element that has an id of section. 
document.getElementById("section").innerHTML = reportHTML;
//The line below creates a function with the name of candidateRows that contains the parameters of raceNum and totalVotes. 
function candidateRows(raceNum, totalVotes) {
    //The line below creates a local variable with the name of rowHTML. The variable is then given the value of an empty string.
    var rowHTML = "";
    //The line below creates a for loop that will continue to run the command block within until the value of the variable j is equal to 2. The value of j will increase in incremnets of one. 
    for (var j = 0; j <= 2; j++) {
        //The line creates a variable with the name of candidateName that is given the value of the specified values in the candidate array. The value of [raceNum][j] retrieve the candidate name from candidate array. 
        var candidateName = candidate[raceNum][j];
        //the line creates a variable with the name of candidateParty that is given the value of the specified value in the party array. [raceNum][j] retrieve the candiate party from the party array.
        var candidateParty = party[raceNum][j];
        //the line creates a variable witht he name of candidateVotes that is assigned the valof of the specified value in the votes array. [raceNum][j] retrieve the candidate votes from the votes array.
        var candidateVotes = votes[raceNum][j];
        //The line below creates a variable with the name of candidatePercent. This variable is given the value of calcPercent which contains the parameters of candidateVotes and totalVotes. This calculates the percent of votes recieved by each candidate. 
        var candidatePercent = calcPercent(candidateVotes, totalVotes);
        //The line below states that the specified string and variable values will be attached to the end of the rowHTML variable value. 
        rowHTML += "<tr><td>" + candidateName + "(" + candidateParty + ")</td><td>" + candidateVotes.toLocaleString() + "(" + candidatePercent.toFixed(1) + ")</td>";
        //The line below creates a for loop that will continue to run as long as the value of the variable k is less than the value of the candidatePercent variable. The variable k will increase in increments of one as long as the value of k is less than candidatePercent. 
        for (var k = 0; k < candidatePercent; k++) {
            // The line below states that the createBar function will be attached to the end of the rowHTML, having the parameters of the candidateParty varibale and the candidatePercent variable. 
            rowHTML += createBar(candidateParty, candidatePercent);
        }
        //The line states that the string written will be added to the end of the rowHTML value. 
        rowHTML += "</tr>";
    }
    //The line states that the value of the rowHTMl variable will be returned. 
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
//The line below creates a function with the name of createBar and the parameter of partyType.
function createBar(partyType) {
    //The line creates a variable with the name of barHTML which is assigned the value of an empty string. 
    var barHTML = "";
    //The block below creates a statement which will evaluate the partyType value. From there, the statement will match the value of to the case that corresponds with it. Once the value and case have been matched, the statements written within the case will be executed. The break line allows for each case to be seperated from one another. 
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
    //The line below states that the value of the barHTML variable will be returned. 
    return barHTML;
}