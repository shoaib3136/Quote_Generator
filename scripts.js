const quotes = [
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" }
];

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const tweetBtn = document.getElementById("tweetBtn");

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
  const { text, author } = getRandomQuote();
  quoteText.innerText = `"${text}"`;
  quoteAuthor.innerText = `– ${author}`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${text}" – ${author}`)}`;
  tweetBtn.href = tweetUrl;
}

newQuoteBtn.addEventListener("click", displayQuote);
displayQuote(); // show first quote on page load
