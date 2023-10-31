let readlineSync = require("readline-sync");
let kuler = require("kuler");
let score = 0;
let userName = readlineSync.question("What is your name: ")

console.log(kuler(`Hello ${userName}, Welcome to Quizify`, "#dc2626"));

console.log("Please select any options by typing either a/b/c/d\n")

/** Creating Data set */

const database = {
    data : [
        {
            question: `let a={}, b={}
            console.log(a == b)
            console.log(a === b)`,

            options: {
                a: "false false",
                b: "false true",
                c: "ture false",
                d: "true true"
            },

            correctAnswer: "a"
        },

        {
            question: `Object.assign(target,source) creates which type of copy?`,

            options: {
                a: "Deep copy",
                b: "Shallow copy",
                c: "Nested copy",
                d: "Creates a new reference"
            },

            correctAnswer: "b"
        },

        {
            question: `Is method chaining possible with forEach?`,

            options: {
                a: "Yes",
                b: "No"
            },

            correctAnswer: "b"
        }
    ]
}

// Creating Leaderboard
const leaderBoard = {
    data: [
        {
            name: "Ashish",
            score: 1
        },
        {
            name: "Suraj",
            score: 3
        },
        {
            name: "Harsh",
            score: 2
        }
    ]
}

// Main Login
function playGame(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer){
        console.log(kuler("Correct Answer\n", "#059669"));
        score++;
    }
    else{
        console.log(kuler("Incorrect Answer\n", "#b91c1c"));
        console.log(kuler(`Correct Answer is ${correctAnswer}\n`, "#1d4ed8"));
    }
}

//
function showQuestionandOptions(database) {
    for(let i=0 ; i<database.data.length ; i++){
        console.log(`Q${i+1}:- ${database.data[i].question}\n`);

        for(let key in database.data[i].options){
            console.log(`${key}:- ${database.data[i].options[key]}`);
        }

        let userAnswer = readlineSync.question("Enter your answer - (a/b/c/d) - ").toLowerCase();

        playGame(userAnswer, database.data[i].correctAnswer)
    }
}

function highScorer(leaderBoard) {
    leaderBoard.data.push({name: userName, score: score});
    let sortedScoreList = leaderBoard.data.sort((a,b) => b.score - a.score);
    console.log(kuler("Check your position on Leader Board 🎉", "#fde047"));
    for(let leader of sortedScoreList){
        console.log(kuler(`Name: ${leader.name} | Score: ${leader.score}`, "#933ea"));
    }
}

showQuestionandOptions(database);
console.log(kuler(`Your score is ${score}\n`,"#5eead4"));
highScorer(leaderBoard);