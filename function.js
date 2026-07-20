function range(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

const exams = [
    {
        name: "AMC 8",
        questions: 25,
        years: range(1985, 2025),
        link: "https://artofproblemsolving.com/wiki/index.php/AMC_8_Problems_and_Solutions"
    },
    {
        name: "AMC 10",
        questions: 25,
        years: range(2000, 2025),
        link: "https://artofproblemsolving.com/wiki/index.php/AMC_10_Problems_and_Solutions"
    },
    {
        name: "AMC 12",
        questions: 25,
        years: range(2000, 2025),
        link: "https://artofproblemsolving.com/wiki/index.php/AMC_12_Problems_and_Solutions"
    },
    {
        name: "AIME I",
        questions: 15,
        years: range(2000, 2025),
        link: "https://artofproblemsolving.com/wiki/index.php/AIME_Problems_and_Solutions"
    },
    {
        name: "AIME II",
        questions: 15,
        years: range(2000, 2025),
        link: "https://artofproblemsolving.com/wiki/index.php/AIME_Problems_and_Solutions"
    },
    {
        name: "AIME",
        questions: 15,
        years: range(1983, 1999),
        link: "https://artofproblemsolving.com/wiki/index.php/AIME_Problems_and_Solutions"
    },
    {
        name: "USAMO",
        questions: 6,
        years: range(1972, 2025),
        link: "https://artofproblemsolving.com/wiki/index.php/USAMO_Problems_and_Solutions"
    },
    {
        name: "IMO",
        questions: 6,
        years: range(1959, 2025),
        link: "https://artofproblemsolving.com/wiki/index.php/IMO_Problems_and_Solutions"
    }
];

const button = document.getElementById("generate-btn");
const output = document.getElementById("question-list");

button.addEventListener("click", generateQuestions);

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateQuestions() {

    output.innerHTML = "";

    const used = new Set();

    while (used.size < 5) {

        const exam = exams[randomInt(exams.length)];
        const year = exam.years[randomInt(exam.years.length)];
        const question = randomInt(exam.questions) + 1;

        const id = `${exam.name}-${year}-${question}`;

        if (!used.has(id)) {

            used.add(id);

            const p = document.createElement("p");

            const a = document.createElement("a");
            a.href = exam.link;
            a.target = "_blank";
            a.rel = "noopener noreferrer";

            a.textContent = `${exam.name} ${year} – Question ${question}`;

            p.appendChild(a);
            output.appendChild(p);
        }
    }
}

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
"Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. — William Thurston",
"It is impossible to be a mathematician without being a poet in soul. — Sofia Kovalevskaya",
"Mathematics, rightly viewed, possesses not only truth, but supreme beauty. — Bertrand Russell",
"The only way to discover mathematics is by doing mathematics. — George Pólya",
"Mathematics is the art of giving the same name to different things. — Henri Poincaré",
"Life is good for only two things: discovering mathematics and teaching mathematics. — Siméon Poisson",
"In mathematics the art of proposing a question must be held of higher value than solving it. — Georg Cantor",
"A mathematician is a machine for turning coffee into theorems. — Alfréd Rényi",
"Mathematics compares the most diverse phenomena and discovers the secret analogies that unite them. — Joseph Fourier",
"The essence of mathematics lies in its freedom. — Georg Cantor",
"Mathematics is the language in which God has written the universe. — Galileo Galilei",
"Mathematics is the music of reason. — James Joseph Sylvester",
"Arithmetic is where numbers fly like pigeons in and out of your head. — Carl Sandburg",
"There is no branch of mathematics, however abstract, which may not someday be applied to reality. — Nikolai Lobachevsky",
"Mathematics is the most beautiful and most powerful creation of the human spirit. — Stefan Banach",
"The study of mathematics, like the Nile, begins in minuteness but ends in magnificence. — Charles Caleb Colton",
"Mathematics reveals its secrets only to those who approach it with pure love. — Archimedes (attributed)",
"The infinite! No other question has ever moved so profoundly the spirit of man. — David Hilbert",
"Read Euler, read Euler, he is the master of us all. — Pierre-Simon Laplace",
"A person who has not studied mathematics is incomplete. — Confucius (attributed)",
"The mathematician's patterns, like the painter's or poet's, must be beautiful. — G. H. Hardy",
"One cannot understand mathematics without effort. — Andrey Kolmogorov",
"Proofs are to mathematics what spelling is to poetry. — Anonymous",
"Mathematics is the science of patterns. — Keith Devlin",
"The joy of mathematics is in seeing hidden structure. — Anonymous",
"Mathematics is the foundation of all exact science. — David Hilbert",
"The shortest path between two truths in the real domain passes through the complex domain. — Jacques Hadamard",
"A good notation has subtlety and suggestiveness. — Bertrand Russell",
"There should be no such thing as boring mathematics. — Edsger Dijkstra",
"Mathematics is an adventure in ideas. — Richard Courant",
"The purpose of abstraction is not to be vague, but to create a new semantic level. — Edsger Dijkstra",
"The essence of proof is convincing. — Anonymous",
"If I have seen further, it is by standing on the shoulders of giants. — Isaac Newton",
"Nature is pleased with simplicity. — Isaac Newton",
"Mathematics is written for mathematicians. — Nicolaus Copernicus",
"Everything should be made as simple as possible, but not simpler. — Albert Einstein",
"Mathematics is the gate and key to the sciences. — Roger Bacon",
"The pursuit of mathematics is a divine madness of the human spirit. — Alfred North Whitehead",
"The laws of nature are but the mathematical thoughts of God. — Euclid (attributed)",
"To solve a problem means to represent it so as to make the solution transparent. — Herbert Simon",
"One of the chief objects of pure mathematics is to discover hidden relations. — G. H. Hardy",
"The mathematician's best work is art. — G. H. Hardy",
"Mathematics is a game played according to simple rules with meaningless marks on paper. — David Hilbert",
"Mathematics is no less creative than poetry. — Karl Weierstrass",
"The greatest discoveries are made by asking simple questions. — Anonymous",
"Mathematics teaches us to admit what we do not know. — Henri Poincaré",
"The only true wisdom is knowing you know nothing. — Socrates",
"Small opportunities are often the beginning of great enterprises. — Demosthenes",
"The roots of education are bitter, but the fruit is sweet. — Aristotle",
"Success is the sum of small efforts, repeated day in and day out. — Robert Collier",
"Discipline is choosing between what you want now and what you want most. — Abraham Lincoln (attributed)",
"Luck is what happens when preparation meets opportunity. — Seneca",
"The expert in anything was once a beginner. — Helen Hayes",
"It always seems impossible until it's done. — Nelson Mandela",
"Dreams don't work unless you do. — John C. Maxwell",
"The beautiful thing about learning is that nobody can take it away from you. — B. B. King",
"Never confuse a single defeat with a final defeat. — F. Scott Fitzgerald",
"Great works are performed not by strength but by perseverance. — Samuel Johnson"
];

const quoteButton = document.getElementById("quote-btn");
const quoteOutput = document.getElementById("quote");

quoteButton.addEventListener("click", generateQuote);

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteOutput.textContent = quotes[randomIndex];
}