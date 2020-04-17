const quotes = [
    {
        name: 'Robert C. Martin',
        quote: 'Truth can only be found in one place: the code.'
    },
    {
        name: 'Kent Beck',
        quote: "I'm not a great programmer; I'm just a good programmer with great habits."
    },
    {
        name: 'Dan Salomon',
        quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code."
    },
    {
        name: 'Jazzwant',
        quote: 'Programming is breaking of one big impossible task into several very small possible tasks.'

    },
    {
        name: 'Erik Meijer',
        quote: 'Think like a fundamentalist, code like a hacker.'
    },
    {
        name: 'Chris Pine',
        quote: "Programming isn't about what you know; it's about what you can figure out."
    },
    {
        name: 'Waseem Latif',
        quote: 'Think twice, code once.'
    },
    {
        name: 'Benjamin H Bratton',
        quote: "Platforms don't look like how they work and don't work like how they look."
    },
    {
        name: 'Waseem Latif',
        quote: 'First solve the problem. Then, write the code.'
    },
    {
        name: 'Michael Feathers',
        quote: 'Programming is the art of doing one thing at a time.'
    }
]

const quoteBtn = document.querySelector('.btn-quote');
const quoteAuthor = document.querySelector('#quote-author');
const outputQuote = document.querySelector('#quote');
const icon1 = document.querySelector('#icon1 i');
const icon2 = document.querySelector('#icon2 i');
let times = 0;

quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {
    quote.classList.add('quote-style');
    let number = Math.floor(Math.random() * quotes.length);
    quoteAuthor.innerHTML = ('– ' + quotes[number].name);
    outputQuote.innerHTML = quotes[number].quote;
    addIcons();
};

function addIcons() {
    times++;

    if (times % 2 === 0) {
        icon1.style.display = 'block';
    } else {
        icon1.style.display = 'none';
    }
    if (times % 3 === 0) {
        icon2.style.display = 'block';
    } else {
        icon2.style.display = 'none';
    }
};