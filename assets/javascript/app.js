var quiz = $("#gamespace"); 

var questions = [
    {
        question: "Which Goalie leads the Devils in Career Wins?",
        answers: ["Keith Kinkaid", "Martin Brodeur", "Chico Resch", "Sean Burke"],
        rightanswer: "Martin Brodeur"
    },
    {
        question: "Who won the Hart Trophy in 2017/2018?",
        answers: ["Taylor Hall", "Jesper Bratt", "Will Butcher", "Kyle Palmieri"],
        rightanswer: "Taylor Hall"
    },
    {
        question: "Who scored the series winning goal vs New York in the 2012 playoffs?",
        answers: ["Zach Parise", "Ilya Kovalchuk", "Adam Henrique", "Petr Sykora"],
        rightanswer: "Adam Henrique"
    },
    {
        question: "What was the Devils previous arena in New Jersey?",
        answers: ["Prudential Center", "Continental Airlines Arena",  "Floyd Hall Arena", "Mennan Arena"],
        rightanswer: "Continental Airlines Arena"
    },
    {
        question: "What legendary Devil saw the number 26 retired in their honor?",
        answers: ["Patrik Elias", "Brian Rolston", "Joe Cirella", "Jason Smith"],
        rightanswer: "Patrik Elias"
    },
    {
        question: "Which long time Devils player provides color commentary on MSG+?",
        answers: ["Stephane Richer", "Bruce Driver", "Ken Daneyko" , "John Maclean"],
        rightanswer: "Ken Daneyko"
    },
    {
        question: "Who did the Devils play in the first regular season game at Prudential Center?",
        answers: ["Toronto Maple Leafs", "New York Rangers", "Ottawa Senators", "Montreal Canadiens"],
        rightanswer: "Ottawa Senators"
    },
    {
        question: "Who is the only player to Captain the Devils to a Stanley Cup?",
        answers: ["Scott Stevens", "Scott Niedermayer", "John Madden", "Aaron Broten"],
        rightanswer: "Scott Stevens"
    },
    {
        question: "Which Devils rival plays at Madison Square Garden?",
        answers: ["Philadelphia Flyers", "New York Islanders", "Buffalo Sabres", "New York Rangers"],
        rightanswer: "New York Rangers"
    },
    {
        question: "Who was the Devils first Captain in New Jersey?",
        answers: ["Steve Tambellini", "Don Lever", "Tapio Levo", "Yvon Vautour"],
        rightanswer: "Don Lever"
    }
]

var timer;

var game = {
  right: 0,
  wrong: 0,
  timeleft: 60,

  countdown: function() {
    game.timeleft--;
    $("#timeleft-number").html(game.timeleft);
    if (game.timeleft === 0) {
      alert("You're Out Of Time!");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#box2").prepend(
      "<h2>You Have <span id='timeleft-number'>60</span> Seconds Remaining!</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      quiz.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        quiz.append("<input type='checkbox' name='question-" + i + "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    quiz.append("<button id='done'>I'm Finished!</button>");
  },

  done: function() {
    var inputs = quiz.find("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].rightanswer) {
        game.right++;
      } else {
        game.wrong++;
      }
    }
    this.score();
  },

  score: function() {
    clearInterval(timer);

    $("#box2 h2").remove();

    quiz.html("<h2>Here's Your game!</h2>");
    quiz.append("<h3>Correct Responses: " + this.right + "</h3>");
    quiz.append("<h3>Incorrect Responses: " + this.wrong + "</h3>");
    quiz.append("<button id='restart'>Restart!</button>");
  }
};

$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#restart", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});
