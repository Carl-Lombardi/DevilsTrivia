# New Jersey Devils Trivia (Repo - https://github.com/Carl-Lombardi/DevilsTrivia) (Site - https://carl-lombardi.github.io/DevilsTrivia/)
This is a trivia game which tests knowledge of the New Jersey Devils. If it's happened on the ice or off since 1982 and it involves the Devils, this is fair game!

## Why the Devils?
As a Devils fan, I figured that a quiz that covered many aspects of the team history would be fun to create and informative. The look of the site is as basic as it comes, but that was done on purpose. The purpose of the game was not to be flashy, but rather create a working, fun app.

## This site uses Javascript and JQuery 
The basic build of the site was HTML/CSS with the use of Javascript to write the code of the game and the use of JQuery to manipulate the HTML. 

## Features
This page consists of an intro page, a 60 second quiz with running timer and 10 questions. Upon completion or the time running out, your score is tallied and then displayed. It's a challenge for even the most avid of fans, as the questions run the entirety of team history. 

## Code Example
The below code is for the countdown function. This code is a function with sets the clock moving, displays it using JQuery modified HTML, and notes that if the time left equals zero, there is an alert that the game is out of time and the game then is completed. 

  countdown: function() {
    game.timeleft--;
    $("#timeleft-number").html(game.timeleft);
    if (game.timeleft === 0) {
      alert("You're Out Of Time!");
      game.done();
    }

## Installation 
No outside software is needed for installation. 

## How to Use
This is a pretty straight forward game. Upon hitting the button on the home page, the user is taken into the game where they have 60 seconds to answer 10 questions. Upon time being up or the hitting of the "I'm Finished" button, the user's results are shown on the screen. 

## Issues and Solutions
The biggest issue that I ran into in creation of this app was coming up with challenging questions and making the app work as intended. 

## Credits
This app was created, written and developed by Carl Lombardi. 
