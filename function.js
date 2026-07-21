// ===============================
// function.js
// ===============================

// ---------- Constants ----------

const QUESTIONS_PER_SET = 5;

const $ = {
    generateButton: document.getElementById("generate-btn"),
    questionList: document.getElementById("question-list"),
    quoteButton: document.getElementById("quote-btn"),
    quoteOutput: document.getElementById("quote")
};

// ---------- Helper Functions ----------

function range(start, end) {
    return Array.from(
        { length: end - start + 1 },
        (_, i) => start + i
    );
}

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function pickRandom(array) {
    return array[randomInt(array.length)];
}

function makeYearMap(start, end, questions) {

    const years = {};

    for (let year = start; year <= end; year++) {
        years[year] = questions;
    }

    return years;
}

// ---------- Exams ----------

const exams = [

{
    name: "AMC 8",
    yearlyQuestions: makeYearMap(1985, 2025, 25),
    link: "https://artofproblemsolving.com/wiki/index.php/AMC_8_Problems_and_Solutions"
},

{
    name: "AMC 10",
    yearlyQuestions: makeYearMap(2000, 2025, 25),
    link: "https://artofproblemsolving.com/wiki/index.php/AMC_10_Problems_and_Solutions"
},

{
    name: "AMC 12",
    yearlyQuestions: makeYearMap(2000, 2025, 25),
    link: "https://artofproblemsolving.com/wiki/index.php/AMC_12_Problems_and_Solutions"
},

{
    name: "AIME",
    yearlyQuestions: makeYearMap(1983, 1999, 15),
    link: "https://artofproblemsolving.com/wiki/index.php/AIME_Problems_and_Solutions"
},

{
    name: "AIME I",
    yearlyQuestions: makeYearMap(2000, 2025, 15),
    link: "https://artofproblemsolving.com/wiki/index.php/AIME_Problems_and_Solutions"
},

{
    name: "AIME II",
    yearlyQuestions: makeYearMap(2000, 2025, 15),
    link: "https://artofproblemsolving.com/wiki/index.php/AIME_Problems_and_Solutions"
},

{
    name: "USAMO",
    yearlyQuestions: makeYearMap(1972, 2025, 6),
    link: "https://artofproblemsolving.com/wiki/index.php/USAMO_Problems_and_Solutions"
},

{
    name: "IMO",
    yearlyQuestions: makeYearMap(1959, 2025, 6),
    link: "https://artofproblemsolving.com/wiki/index.php/IMO_Problems_and_Solutions"
},

{
    name: "ISI Entrance",
    yearlyQuestions: {

        2005:30,
        2006:30,
        2007:30,
        2008:30,
        2009:30,
        2010:30,
        2011:30,
        2012:30,
        2013:30,
        2014:30,
        2015:30,
        2016:30,
        2017:30,
        2018:30,
        2019:30,
        2020:30,
        2021:30,
        2022:30,
        2023:30,
        2024:30,
        2025:30

    },
    link:"https://admission.isical.ac.in/syllabus-qp.html"
},

{
    name:"CMI Entrance",
    yearlyQuestions:{

        2005:30,
        2006:30,
        2007:30,
        2008:30,
        2009:30,
        2010:30,
        2011:30,
        2012:30,
        2013:30,
        2014:30,
        2015:30,
        2016:30,
        2017:30,
        2018:30,
        2019:30,
        2020:30,
        2021:30,
        2022:30,
        2023:31,
        2024:31,
        2025:31

    },
    link:"https://www.cmi.ac.in/admissions/syllabus.php"
}

];

// ---------- Question Generator ----------

function createQuestionLink(exam, year, question){

    const p=document.createElement("p");

    const a=document.createElement("a");

    a.href=exam.link;
    a.target="_blank";
    a.rel="noopener noreferrer";

    a.textContent=
        `${exam.name} ${year} – Question ${question}`;

    p.appendChild(a);

    return p;
}

function generateQuestions(){

    $.questionList.innerHTML="";

    const used=new Set();

    while(used.size<QUESTIONS_PER_SET){

        const exam=pickRandom(exams);

        const years=Object.keys(exam.yearlyQuestions);

        const year=Number(
            pickRandom(years)
        );

        const question=
            randomInt(
                exam.yearlyQuestions[year]
            )+1;

        const id=
            `${exam.name}-${year}-${question}`;

        if(used.has(id)){
            continue;
        }

        used.add(id);

        $.questionList.appendChild(
            createQuestionLink(
                exam,
                year,
                question
            )
        );

    }

}

// ---------- Quotes ----------

const quotes = [

"Pure mathematics is, in its way, the poetry of logical ideas. — Albert Einstein",
"Mathematics is the queen of the sciences. — Carl Friedrich Gauss",
"God created the integers; all else is the work of man. — Leopold Kronecker",
"Mathematics knows no races or geographic boundaries. — David Hilbert",
"The only way to learn mathematics is to do mathematics. — Paul Halmos",
"Without mathematics, there's nothing you can do. Everything around you is mathematics. — Shakuntala Devi",
"An equation means nothing to me unless it expresses a thought of God. — Srinivasa Ramanujan",
"Beauty is the first test: there is no permanent place in the world for ugly mathematics. — G. H. Hardy",
"The book of nature is written in the language of mathematics. — Galileo Galilei",
"Do not worry about your difficulties in mathematics. I can assure you mine are still greater. — Albert Einstein",

"Mathematics is not about numbers, equations, computations, or algorithms; it is about understanding. — William Thurston",
"It is impossible to be a mathematician without being a poet in soul. — Sofia Kovalevskaya",
"Mathematics, rightly viewed, possesses not only truth, but supreme beauty. — Bertrand Russell",
"The only way to discover mathematics is by doing mathematics. — George Pólya",
"Mathematics is the art of giving the same name to different things. — Henri Poincaré",
"The essence of mathematics lies in its freedom. — Georg Cantor",
"Mathematics is the language in which God has written the universe. — Galileo Galilei",
"Mathematics is the music of reason. — James Joseph Sylvester",
"There is no branch of mathematics, however abstract, which may not someday be applied to reality. — Nikolai Lobachevsky",
"Mathematics is the most beautiful and most powerful creation of the human spirit. — Stefan Banach",

"The infinite! No other question has ever moved so profoundly the spirit of man. — David Hilbert",
"Read Euler, read Euler, he is the master of us all. — Pierre-Simon Laplace",
"The mathematician's patterns, like the painter's or poet's, must be beautiful. — G. H. Hardy",
"Mathematics is the science of patterns. — Keith Devlin",
"The shortest path between two truths in the real domain passes through the complex domain. — Jacques Hadamard",
"There should be no such thing as boring mathematics. — Edsger Dijkstra",
"Mathematics is an adventure in ideas. — Richard Courant",
"If I have seen further, it is by standing on the shoulders of giants. — Isaac Newton",
"Nature is pleased with simplicity. — Isaac Newton",
"Mathematics is the gate and key to the sciences. — Roger Bacon",

"One of the chief objects of pure mathematics is to discover hidden relations. — G. H. Hardy",
"Mathematics is no less creative than poetry. — Karl Weierstrass",
"Mathematics teaches us to admit what we do not know. — Henri Poincaré",
"The important thing is not to stop questioning. — Albert Einstein",
"I have no special talent. I am only passionately curious. — Albert Einstein",
"Success is the sum of small efforts, repeated day after day. — Robert Collier",
"Discipline is choosing between what you want now and what you want most. — Abraham Lincoln (attributed)",
"Luck is what happens when preparation meets opportunity. — Seneca",
"The expert in anything was once a beginner. — Helen Hayes",
"It always seems impossible until it's done. — Nelson Mandela",

"Dreams don't work unless you do. — John C. Maxwell",
"The beautiful thing about learning is that nobody can take it away from you. — B. B. King",
"Great works are performed not by strength but by perseverance. — Samuel Johnson",
"Hard work beats talent when talent doesn't work hard. — Tim Notke",
"Don't watch the clock; do what it does. Keep going. — Sam Levenson",
"The harder you work, the luckier you get. — Gary Player",
"Action is the foundational key to success. — Pablo Picasso",
"Learning never exhausts the mind. — Leonardo da Vinci",
"The secret of getting ahead is getting started. — Mark Twain",
"A journey of a thousand miles begins with a single step. — Lao Tzu"

];

// ---------- Quote Generator ----------

function generateQuote() {

    $.quoteOutput.textContent = pickRandom(quotes);

}

// ---------- Event Listeners ----------

$.generateButton.addEventListener(
    "click",
    generateQuestions
);

$.quoteButton.addEventListener(
    "click",
    generateQuote
);

// ---------- Optional: Show a quote on page load ----------

// Uncomment the line below if you want a random quote
// to appear automatically when the website opens.

// generateQuote();